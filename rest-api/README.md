

## 🛠️ Arquitetura

<p align="center">
  <img src="https://github.com/IgorCruzz/cdk-samples/blob/main/diagrams/rest-api.jpg" alt="Arquitetura" />
</p>

## 🚀 Principais Funcionalidades

- 📧 Envio de emails transacionais com Amazon SES  
- 💬 Envio de mensagens WhatsApp via Twilio  
- 🔁 Processamento assíncrono e escalável com AWS SQS + Lambda  
- 🔔 Orquestração com SNS para múltiplos canais de notificação  
- ⚙️ Totalmente **serverless**, sem servidores para gerenciar  
- 📦 Separação clara de responsabilidades: API, processamento e entrega

 ## 📦 Tecnologias & Serviços

- AWS API Gateway – Endpoint público para requisições

- AWS Lambda – Funções serverless para orquestração e envio

- AWS SNS – Distribuição de mensagens para diferentes canais

- AWS SQS – Fila para processamento assíncrono

- Amazon SES – Serviço de envio de emails

- Twilio API – Envio de mensagens via WhatsApp