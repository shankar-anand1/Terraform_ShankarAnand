variable "aws_region" {
  type    = string
  default = "ap-south-1"
}

variable "instance_type" {
  type    = string
  default = "t2.micro"
}

variable "ami_id" {
  type        = string
  description = "Ubuntu AMI in the region"
  default     = "ami-0f5ee92e2d63afc18"
}

variable "key_name" {
  type        = string
  description = "Existing EC2 key pair name"
  default     = "devops-key"
}
