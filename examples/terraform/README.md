# Terraform

## Installation

```shell
$ brew tap hashicorp/tapbrew tap hashicorp/tap
$ brew install hashicorp/tap/terraform
```

## Commands

Show version

```shell
$ terraform -version
```

Enable tab completion

```shell
$ terraform -install-autocomplete
```

Initialize the project

```shell
$ terraform init
```

Apply the project

```shell
$ terraform apply
```

Destroy the project

```shell
$ terraform destroy
```

Format the configuration

```shell
$ terraform fmt
```

Validate the configuration

```shell
$ terraform validate
```

List state

```shell
$ terraform state list
```

Apply with variables

```shell
$ terraform apply \
  -var 'region=us-west-2'
$ terraform apply -var 'amis={ us-east-1 = "foo", us-west-2 = "bar" }'
```

Show output after apply

```shell
$ terraform output ip
```
