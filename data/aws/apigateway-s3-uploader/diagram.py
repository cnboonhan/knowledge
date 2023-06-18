from diagrams import Diagram
from diagrams.aws.mobile import APIGateway
from diagrams.aws.storage import S3
from diagrams.aws.integration import Eventbridge
from diagrams.aws.compute import Lambda

with Diagram(show=False):
    APIGateway()  >> S3() >> Eventbridge("S3 Update") >> Lambda("import")
