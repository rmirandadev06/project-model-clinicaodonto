// Espera o HTML carregar
document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DA PÁGINA DE LOGIN (login.html) ---
    const formPaciente = document.getElementById('form-paciente');
    const formDentista = document.getElementById('form-dentista');
    const formAdmin = document.getElementById('form-admin');

    if (formPaciente) {
        formPaciente.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o recarregamento da página
            alert('Demonstração: Logando como Paciente...');
            window.location.href = 'dashboard_paciente.html'; // Redireciona
        });
    }
    if (formDentista) {
        formDentista.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Demonstração: Logando como Dentista...');
            window.location.href = 'dashboard_dentista.html';
        });
    }
    if (formAdmin) {
        formAdmin.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Demonstração: Logando como Admin...');
            window.location.href = 'dashboard_admin.html';
        });
    }

    // --- LÓGICA DA PÁGINA DE CADASTRO (register.html) ---
    const formRegister = document.getElementById('form-register');
    if (formRegister) {
        formRegister.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Demonstração: Cadastro simulado com sucesso!');
            window.location.href = 'login.html'; // Volta para o login
        });
    }

    // --- LÓGICA DOS DASHBOARDS (Botão de Logout) ---
    const logoutButton = document.querySelector('.btn-logout');
    if (logoutButton) {
        logoutButton.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Demonstração: Fazendo logout...');
            window.location.href = 'login.html'; // Volta para o login
        });
    }
    
    // --- LÓGICA DA PÁGINA INICIAL (index.html) ---
    // Faz o botão "Agendar Consulta" ir para a tela de login
    const btnAgendarHero = document.querySelector('.hero .btn-primary');
    if(btnAgendarHero) {
        btnAgendarHero.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'login.html';
        });
    }

    // --- LÓGICA DO ADMIN (Mostrar/Esconder Campo CRO) ---
    const roleSelect = document.getElementById('cad-role');
    const croGroup = document.getElementById('cro-group');
    if (roleSelect) {
         roleSelect.addEventListener('change', () => {
            if (roleSelect.value === 'dentista') {
                croGroup.style.display = 'block';
            } else {
                croGroup.style.display = 'none';
            }
        });
    }
});