document.addEventListener("DOMContentLoaded", () => {

    const projectMap = {
        "via-mangue": () => openModal(
            "Via Mangue – Recife/PE",
            "Mobilidade Urbana",
            "📍 Recife, Pernambuco",
            "/Global-soucers/img/Projetos/Projeto-Via-Mangue.jpg",
            "Obra de mobilidade urbana de grande porte, incluindo sistema viário, pontes e soluções para melhoria do tráfego e integração urbana.",
            ["Mobilidade", "Pontes"]
        ),

        "pe-015": () => openModal(
            "PE-015 – Triplicação",
            "Infraestrutura Rodoviária",
            "📍 Pernambuco",
            "/Global-soucers/img/Projetos/Triplicação-PE.jpg",
            "Projeto de ampliação da capacidade viária, com triplicação de pistas.",
            ["Triplicação", "Mobilidade"]
        ),

        "br-232": () => openModal(
            "BR-232 – Duplicação e Restauração",
            "Infraestrutura Rodoviária",
            "📍 Pernambuco",
            "/Global-soucers/img/Projetos/Duplicação-BR-232-PE.jpg",
            "Obra rodoviária com extensão aproximada de 124 km.",
            ["Duplicação", "124 km"]
        ),

        "br-135": () => openModal(
            "BR-135",
            "Infraestrutura Rodoviária",
            "📍 Escoamento Logístico",
            "/Global-soucers/img/Projetos/Pavimentação-BR-135-PI.jpg",
            "Execução de serviços rodoviários em trecho estratégico.",
            ["Logística", "Estratégico"]
        ),

        "ponte-sf": () => openModal(
            "Ponte sobre o Rio São Francisco",
            "Obras Especiais",
            "📍 Rio São Francisco",
            "/Global-soucers/img/Projetos/Ponte-sobre-rio-sao-francisco.jpg",
            "Obra de arte especial de grande porte.",
            ["Ponte", "Arte Especial"]
        ),

        "metro-expansao": () => openModal(
            "Metrô do Recife – Expansão",
            "Infraestrutura Ferroviária",
            "📍 Recife, Pernambuco",
            "/Global-soucers/img/Projetos/Expansão-do-Metrô-de-Recife.jpg",
            "Serviços de engenharia para ampliação do sistema metroviário.",
            ["Metrô", "Expansão"]
        ),

        "honda-am": () => openModal(
            "Moto Honda da Amazônia",
            "Projetos Industriais",
            "📍 Amazonas",
            "/Global-soucers/img/Projetos/Moto-Honda-da-Amazônia.jpg",
            "Atuação em obras industriais para unidade fabril.",
            ["Manufatura", "Fabril"]
        ),

        "transnordestina": () => openModal(
            "Ferrovia Transnordestina",
            "Infraestrutura Ferroviária",
            "📍 Nordeste",
            "/Global-soucers/img/Projetos/Ferrovia-Transnordestina.jpg",
            "Projeto ferroviário de grande porte.",
            ["Ferrovia", "Cargas"]
        ),

        "abreu-lima": () => openModal(
            "Refinaria Abreu e Lima",
            "Projetos Industriais",
            "📍 Pernambuco",
            "/Global-soucers/img/Projetos/Refinaria-Abreu-e-Lima.jpg",
            "Empreendimento industrial de grande escala.",
            ["Petróleo", "Energia"]
        )
    };

    const params = new URLSearchParams(window.location.search);
    const project = params.get("project");

    if (project && projectMap[project]) {
        projectMap[project]();
    }
});
