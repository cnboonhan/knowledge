import boto3
from textblob import TextBlob


def generate_aws_phrases(c):
    cli_commands = [func for func in dir(c) if callable(
        getattr(c, func)) and not func.startswith("__") and not func.startswith("_")]

    extracted_words = set()
    action_context = {}

    for cmd in cli_commands:
        if cmd in ['can_paginate', 'get_waiter', 'get_paginator'] :
            continue
        classified = TextBlob(cmd.replace('_', ' ')).tags
        action = classified[0][0]
        action_desc = classified[1:]
        try:
            action_context[action]
        except Exception:
            action_context[action] = set()

        current_word = ""
        for word in action_desc:
            if word[1] in ['TO', 'IN']:
                if current_word.strip() != "":
                    extracted_words.add(current_word)
                    action_context[action].add(current_word)
                current_word = ""
            else:
                current_word = f"{current_word} {word[0]}"
                current_word = current_word.lstrip().rstrip()

        if current_word.strip() != "":
            extracted_words.add(current_word)
            action_context[action].add(current_word)

    for action in action_context.keys():
        context = action_context[action]
        action_context[action] = list(context)

    extracted_words = list(extracted_words)
    cli_commands = list(cli_commands)

    output = {
        "commands": cli_commands,
        "words": extracted_words,
        "actions": action_context
    }
    return output


def generate_aws_prompts(phrases, client):
    output = []
    for command in phrases['commands']:
        output.append(f"what does {command} do in AWS CLI for {client}?")
    for word in phrases['words']:
        output.append(f"what is {word} in AWS {client}?")
    for action in phrases['actions'].keys():
        for context in phrases['actions'][action]:
            output.append(f"how to {action} {context} in AWS {client}?")
    return output
