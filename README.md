# Terraform AWS deploy

Student: Shankar Anand

GitHub: https://github.com/shankar-anand1/Terraform_ShankarAnand

App code is in `apps/`. Terraform is split:

- `part1-single-ec2/`
- `part2-two-ec2/`
- `part3-ecs/`

## Before apply

```
aws configure
# set key_name in variables.tf to your EC2 key pair
```

Optional S3 state is commented in part1 main.tf.

## Part 1

```
cd part1-single-ec2
terraform init
terraform plan
terraform apply
```

SSH in, copy `apps/` , start flask on 5000 and express on 3000.

## Part 2

Same commands in `part2-two-ec2`. Set Express `BACKEND_URL` to the backend private/public IP.

## Part 3

```
cd part3-ecs
terraform init
terraform apply
# then docker build/tag/push to the ECR URLs from terraform output
```

ALB and NAT/ECS can cost money. Run `terraform destroy` when done.
