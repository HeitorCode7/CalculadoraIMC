 <header class="cabecalho">
        <a class="cabecalho__menu__links" href="#calculadora">Calculadora</a>
        <a class="cabecalho__menu__links" href="#tabela">Tabela</a>  
    </header>

    .cabecalho__menu__links {
    font-family: var(--font-secundaria);
    font-size: 20px;
    text-decoration: none;
    color: var(--cor-secundaria);
    
}

.cabecalho_menu {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 600px;
    max-width: 300px;
    margin: 0 auto;
}

.cabecalho {
    padding: 3% 0% 0% 15%;
    background-color: var(--cor-terciaria);
    display: flex;
    justify-content: center;
}

body {
    box-sizing: border-box;
    background-color: var(--cor-primaria);
}


.tabela__imc td:not(:last-child), .tabela__imc th:not(:last-child) {
    border-right: 1px solid var(--cor-primaria);
}