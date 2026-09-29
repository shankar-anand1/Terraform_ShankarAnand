output "ecr_backend" {
  value = aws_ecr_repository.backend.repository_url
}

output "ecr_frontend" {
  value = aws_ecr_repository.frontend.repository_url
}

output "alb_dns" {
  value = aws_lb.app.dns_name
}

output "cluster" {
  value = aws_ecs_cluster.app.name
}
