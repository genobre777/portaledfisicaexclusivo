// Filtragem simples para páginas que têm lista de módulos ou itens

document.getElementById("searchInput")?.addEventListener("input", function() {
    const termo = this.value.toLowerCase();
    const elementos = document.querySelectorAll(".modulo, .livro, .lembrete");

    elementos.forEach(el => {
        el.style.display = el.innerText.toLowerCase().includes(termo) ? "block" : "none";
    });
});
