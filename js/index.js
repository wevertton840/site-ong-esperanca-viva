<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerenciador de Tarefas</title>
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        /* Estilo para riscar a tarefa quando estiver concluída */
        .concluida {
            text-decoration: line-through;
            color: #6c757d;
        }
    </style>
</head>
<body class="bg-light">
    <div class="container mt-5" style="max-width: 600px;">
        <h1 class="text-center mb-4">Gerenciador de Tarefas</h1>
        
        <!-- Formulário de adição -->
        <div class="card mb-4 shadow-sm">
            <div class="card-body">
                <h5 class="card-title mb-3">Adicionar Nova Tarefa</h5>
                <form id="formTarefa">
                    <div class="mb-3">
                        <input type="text" class="form-control" id="novaTarefa" placeholder="Digite sua tarefa..." required>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Adicionar Tarefa</button>
                </form>
            </div>
        </div>
        
        <!-- Lista de tarefas -->
        <div class="card shadow-sm">
            <div class="card-body">
                <h5 class="card-title mb-3">Minhas Tarefas</h5>
                <ul id="listaTarefas" class="list-group list-group-flush">
                    <!-- Tarefas serão inseridas aqui via JavaScript -->
                </ul>
            </div>
        </div>
    </div>

    <!-- Bootstrap 5 JS e Script da aplicação -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js"></script>
</body>
</html>