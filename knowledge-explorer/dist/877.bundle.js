"use strict";(self.webpackChunkknowledge_explorer=self.webpackChunkknowledge_explorer||[]).push([[877],{1877:(e,t,n)=>{n.r(t),n.d(t,{ChatOpenAI:()=>d,PromptLayerChatOpenAI:()=>g});var a=n(6485),i=n(5606),r=n(566),s=n(6134),o=n(8610),l=n(1713);class p extends o.qV{constructor(e){super(e)}async generate(e,t,n){const a=[],i=[];let r;r=Array.isArray(t)?{stop:t}:t?.timeout&&!t.signal?{...t,signal:AbortSignal.timeout(t.timeout)}:t??{};const o=await l.Ye.configure(n,this.callbacks,{verbose:this.verbose}),p={invocation_params:this?.invocationParams()},u=await(o?.handleChatModelStart({name:this._llmType()},e,void 0,void 0,p));try{const t=await Promise.all(e.map((e=>this._generate(e,r,u))));for(const e of t)e.llmOutput&&i.push(e.llmOutput),a.push(e.generations)}catch(e){throw await(u?.handleLLMError(e)),e}const c={generations:a,llmOutput:i.length?this._combineLLMOutput?.(...i):void 0};return await(u?.handleLLMEnd(c)),Object.defineProperty(c,s.WH,{value:u?{runId:u?.runId}:void 0,configurable:!0}),c}invocationParams(){return{}}_modelType(){return"base_chat_model"}async generatePrompt(e,t,n){const a=e.map((e=>e.toChatMessages()));return this.generate(a,t,n)}async call(e,t,n){return(await this.generate([e],t,n)).generations[0][0].message}async callPrompt(e,t,n){const a=e.toChatMessages();return this.call(a,t,n)}async predictMessages(e,t,n){return this.call(e,t,n)}async predict(e,t,n){const a=new s.Z(e);return(await this.call([a],t,n)).text}}var u=n(1023),c=n(3551);function m(e){switch(e){case"system":return"system";case"ai":return"assistant";case"human":return"user";default:throw new Error(`Unknown message type: ${e}`)}}function h(e,t){switch(e){case"user":return new s.Z(t);case"assistant":return new s.Ck(t);case"system":return new s.w(t);default:return new s.J(t,e??"unknown")}}class d extends p{get callKeys(){return["stop","signal","timeout","options"]}constructor(e,t){super(e??{}),Object.defineProperty(this,"temperature",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"topP",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"frequencyPenalty",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"presencePenalty",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"n",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"logitBias",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"modelName",{enumerable:!0,configurable:!0,writable:!0,value:"gpt-3.5-turbo"}),Object.defineProperty(this,"modelKwargs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"stop",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"timeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"streaming",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"maxTokens",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"azureOpenAIApiVersion",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"azureOpenAIApiKey",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"azureOpenAIApiInstanceName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"azureOpenAIApiDeploymentName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"client",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clientConfig",{enumerable:!0,configurable:!0,writable:!0,value:void 0});const n=e?.openAIApiKey??(0,i.lS)("OPENAI_API_KEY"),a=e?.azureOpenAIApiKey??(0,i.lS)("AZURE_OPENAI_API_KEY");if(!a&&!n)throw new Error("(Azure) OpenAI API key not found");const r=e?.azureOpenAIApiInstanceName??(0,i.lS)("AZURE_OPENAI_API_INSTANCE_NAME"),s=e?.azureOpenAIApiDeploymentName??(0,i.lS)("AZURE_OPENAI_API_DEPLOYMENT_NAME"),o=e?.azureOpenAIApiVersion??(0,i.lS)("AZURE_OPENAI_API_VERSION");if(this.modelName=e?.modelName??this.modelName,this.modelKwargs=e?.modelKwargs??{},this.timeout=e?.timeout,this.temperature=e?.temperature??this.temperature,this.topP=e?.topP??this.topP,this.frequencyPenalty=e?.frequencyPenalty??this.frequencyPenalty,this.presencePenalty=e?.presencePenalty??this.presencePenalty,this.maxTokens=e?.maxTokens,this.n=e?.n??this.n,this.logitBias=e?.logitBias,this.stop=e?.stop,this.streaming=e?.streaming??!1,this.azureOpenAIApiVersion=o,this.azureOpenAIApiKey=a,this.azureOpenAIApiInstanceName=r,this.azureOpenAIApiDeploymentName=s,this.streaming&&this.n>1)throw new Error("Cannot stream results when n > 1");if(this.azureOpenAIApiKey){if(!this.azureOpenAIApiInstanceName)throw new Error("Azure OpenAI API instance name not found");if(!this.azureOpenAIApiDeploymentName)throw new Error("Azure OpenAI API deployment name not found");if(!this.azureOpenAIApiVersion)throw new Error("Azure OpenAI API version not found")}this.clientConfig={apiKey:n,...t}}invocationParams(){return{model:this.modelName,temperature:this.temperature,top_p:this.topP,frequency_penalty:this.frequencyPenalty,presence_penalty:this.presencePenalty,max_tokens:-1===this.maxTokens?void 0:this.maxTokens,n:this.n,logit_bias:this.logitBias,stop:this.stop,stream:this.streaming,...this.modelKwargs}}_identifyingParams(){return{model_name:this.modelName,...this.invocationParams(),...this.clientConfig}}identifyingParams(){return this._identifyingParams()}async _generate(e,t,n){const a={};if(this.stop&&t?.stop)throw new Error("Stop found in input and default params");const i=this.invocationParams();i.stop=t?.stop??i.stop;const s=e.map((e=>({role:m(e._getType()),content:e.text,name:e.name}))),o=i.stream?await new Promise(((e,a)=>{let o,l=!1,p=!1;this.completionWithRetry({...i,messages:s},{signal:t?.signal,...t?.options,adapter:r.Z,responseType:"stream",onmessage:t=>{if("[DONE]"===t.data?.trim?.()){if(p)return;p=!0,e(o)}else{const a=JSON.parse(t.data);o||(o={id:a.id,object:a.object,created:a.created,model:a.model,choices:[]});for(const e of a.choices)if(null!=e){let t=o.choices.find((t=>t.index===e.index));t||(t={index:e.index,finish_reason:e.finish_reason??void 0},o.choices[e.index]=t),t.message||(t.message={role:e.delta?.role,content:e.delta?.content??""}),t.message.content+=e.delta?.content??"",n?.handleLLMNewToken(e.delta?.content??"")}!p&&a.choices.every((e=>null!=e.finish_reason))&&(p=!0,e(o))}}}).catch((e=>{l||(l=!0,a(e))}))})):await this.completionWithRetry({...i,messages:s},{signal:t?.signal,...t?.options}),{completion_tokens:l,prompt_tokens:p,total_tokens:u}=o.usage??{};l&&(a.completionTokens=(a.completionTokens??0)+l),p&&(a.promptTokens=(a.promptTokens??0)+p),u&&(a.totalTokens=(a.totalTokens??0)+u);const c=[];for(const e of o.choices){const t=e.message?.role??void 0,n=e.message?.content??"";c.push({text:n,message:h(t,n)})}return{generations:c,llmOutput:{tokenUsage:a}}}async getNumTokensFromMessages(e){let t=0,n=0,a=0;"gpt-3.5-turbo"===(0,u._i)(this.modelName)?(n=4,a=-1):(0,u._i)(this.modelName).startsWith("gpt-4")&&(n=3,a=1);const i=await Promise.all(e.map((async e=>{const i=await this.getNumTokens(e.text),r=await this.getNumTokens(m(e._getType())),s=void 0!==e.name?a+await this.getNumTokens(e.name):0,o=i+n+r+s;return t+=o,o})));return t+=3,{totalCount:t,countPerMessage:i}}async completionWithRetry(e,t){if(!this.client){const e=this.azureOpenAIApiKey?`https://${this.azureOpenAIApiInstanceName}.openai.azure.com/openai/deployments/${this.azureOpenAIApiDeploymentName}`:this.clientConfig.basePath,t=new a.Configuration({...this.clientConfig,basePath:e,baseOptions:{timeout:this.timeout,...this.clientConfig.baseOptions}});this.client=new a.OpenAIApi(t)}const n={adapter:(0,i.UG)()?void 0:r.Z,...this.clientConfig.baseOptions,...t};return this.azureOpenAIApiKey&&(n.headers={"api-key":this.azureOpenAIApiKey,...n.headers},n.params={"api-version":this.azureOpenAIApiVersion,...n.params}),this.caller.call(this.client.createChatCompletion.bind(this.client),e,n).then((e=>e.data))}_llmType(){return"openai"}_combineLLMOutput(...e){return e.reduce(((e,t)=>(t&&t.tokenUsage&&(e.tokenUsage.completionTokens+=t.tokenUsage.completionTokens??0,e.tokenUsage.promptTokens+=t.tokenUsage.promptTokens??0,e.tokenUsage.totalTokens+=t.tokenUsage.totalTokens??0),e)),{tokenUsage:{completionTokens:0,promptTokens:0,totalTokens:0}})}}class g extends d{constructor(e){super(e),Object.defineProperty(this,"promptLayerApiKey",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"plTags",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"returnPromptLayerId",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.promptLayerApiKey=e?.promptLayerApiKey??("undefined"!=typeof process?process.env?.PROMPTLAYER_API_KEY:void 0),this.plTags=e?.plTags??[],this.returnPromptLayerId=e?.returnPromptLayerId??!1}async _generate(e,t,n){const a=Date.now();let i;i=Array.isArray(t)?{stop:t}:t?.timeout&&!t.signal?{...t,signal:AbortSignal.timeout(t.timeout)}:t??{};const r=await super._generate(e,i,n),s=Date.now(),o=(e,t)=>{const n={...this.invocationParams(),model:this.modelName};if(t?.stop&&Object.keys(n).includes("stop"))throw new Error("`stop` found in both the input and default params.");return e.map((e=>(e=>{let t;if("human"===e._getType())t={role:"user",content:e.text};else if("ai"===e._getType())t={role:"assistant",content:e.text};else if("system"===e._getType())t={role:"system",content:e.text};else{if("generic"!==e._getType())throw new Error(`Got unknown type ${e}`);t={role:e.role,content:e.text}}return t})(e)))};for(let t=0;t<r.generations.length;t+=1){const n=r.generations[t],l=o(e,i);let p;const u=[{content:n.text,role:m(n.message._getType())}],h=await(0,c.r)(this.caller,"langchain.PromptLayerChatOpenAI",l,this._identifyingParams(),this.plTags,u,a,s,this.promptLayerApiKey);!0===this.returnPromptLayerId&&(!0===h.success&&(p=h.request_id),n.generationInfo&&"object"==typeof n.generationInfo||(n.generationInfo={}),n.generationInfo.promptLayerRequestId=p)}return r}}}}]);