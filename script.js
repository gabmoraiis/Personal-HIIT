const comparationInfo = [
    {
        desvantagens: [
            "DESVANTAGEM 1",
            "DESVANTAGEM 2",
            "DESVANTAGEM 3",
            "DESVANTAGEM 4",
            "DESVANTAGEM 5",
        ],
        vantagens: [
            "VANTAGEM 1",
            "VANTAGEM 2",
            "VANTAGEM 3",
            "VANTAGEM 4",
            "VANTAGEM 5",
        ]
    }
]

const moduleInfo = [
    {
        imagens: [
            "./assets/cover1.jpg",
            "./assets/cover2.jpg",
            "./assets/cover3.jpg",
            "./assets/cover4.jpg",
            "./assets/cover5.jpg",
            "./assets/cover6.jpg",
            "./assets/cover7.jpg",
            "./assets/cover8.jpg",
            "./assets/cover9.jpg",
            "./assets/cover10.jpg"
        ],
        titulos: [
            "Módulo 1",
            "Módulo 2",
            "Módulo 3",
            "Módulo 4",
            "Módulo 5",
            "Módulo 6",
            "Módulo 7",
            "Módulo 8",
            "Módulo 9",
            "Módulo 10",
        ],
        info: [
            "Informação 1",
            "Informação 2",
            "Informação 3",
            "Informação 4",
            "Informação 5",
            "Informação 6",
            "Informação 7",
            "Informação 8",
            "Informação 9",
            "Informação 10",
        ]
    }
]

const advantagesInfo = [
    {
        titulos: [
            "+X HORAS DE CONTEÚDO",
            "LIVE MENSAL",
            "EMBASAMENTO",
            "7 DIAS",
        ],
        descricao: [
            "O necessário pra você ser o melhor.",
            "Aula ao vivo todo mês.",
            "Todo mês um artigo científico para estruturar seu conhecimento.",
            "Garantia de 7 dias, ou o seu dinheiro de volta.",
        ]
    }
]

const benefitsInfo = [
    {
        beneficios:
            ["Mais de 200 aulas",
                "Aula ao vivo todo mês",
                "Artigo Científico de Embasamento",
                "Resumos"
            ],
        cursos:
            ["Certificação Personal HIIT: Especializado para Personal Trainers.",
            ]
    }
]

const questionsInfo = [
    {
        perguntas: [
            "Pergunta 1",
            "Pergunta 2",
            "Pergunta 3",
            "Pergunta 4",
            "Pergunta 5",
            "Pergunta 6"
        ],
        respostas: [
            "Resposta 1",
            "Resposta 2",
            "Resposta 3",
            "Resposta 4",
            "Resposta 5",
            "Resposta 6"
        ]
    }
]
const headerButtons = document.querySelectorAll("#header-buttons-box .header-buttons");
const middleSection = document.getElementById("middle1");
const middle2Section = document.getElementById("middle2");
const middle3Section = document.getElementById("middle3");

headerButtons[0].addEventListener("click", () => {
    middleSection.scrollIntoView({ behavior: 'smooth' });
});
headerButtons[1].addEventListener("click", () => {
    middle2Section.scrollIntoView({ behavior: 'smooth' });
});
headerButtons[2].addEventListener("click", () => {
    middle3Section.scrollIntoView({ behavior: 'smooth' });
});

comparationInfo.forEach((item) => {

    const list1Box = document.querySelector('#list1-box');
    const list2Box = document.querySelector('#list2-box');

    for (let d of item.desvantagens) {
        const desvantagensBox = document.createElement('div');
        desvantagensBox.setAttribute('class', 'list');
        const xIcon = document.createElement('i');
        xIcon.setAttribute('class', 'fa-regular fa-circle-xmark');
        const desvantagem = document.createElement('span');
        desvantagem.setAttribute('class', 'list1Li');
        desvantagem.innerText = d;
        const br = document.createElement('br');

        desvantagensBox.appendChild(xIcon);
        desvantagensBox.appendChild(desvantagem);
        desvantagensBox.appendChild(br);
        list1Box.appendChild(desvantagensBox);
    }

    for (let v of item.vantagens) {
        const vantagensBox = document.createElement('div');
        vantagensBox.setAttribute('class', 'list');
        const cIcon = document.createElement('i');
        cIcon.setAttribute('class', 'fa-regular fa-circle-check');
        const vantagem = document.createElement('span');
        vantagem.setAttribute('class', 'list2Li');
        vantagem.innerText = v;
        const br2 = document.createElement('br');

        vantagensBox.appendChild(cIcon);
        vantagensBox.appendChild(vantagem);
        vantagensBox.appendChild(br2);
        list2Box.appendChild(vantagensBox);
    }
})

const carrossel = document.getElementById("carrossel");
const backButton = document.getElementById("back-button");
const nextButton = document.getElementById("next-button");
let idx = 0;

backButton.addEventListener("click", () => {
    if (idx > 0) {
        idx--;
        carrossel.style.transform = `translateX(${-idx * 500}px)`;
    }
    else {
        idx = 4;
        carrossel.style.transform = `translateX(${-idx * 500}px)`;
    }
});

nextButton.addEventListener("click", () => {

    const imgCarrossel = document.querySelectorAll("#carrossel img");

    if (idx < imgCarrossel.length - 1) {
        idx++;
        carrossel.style.transform = `translateX(${-idx * 500}px)`;
    }
    else {
        idx = 0;
        carrossel.style.transform = `translateX(${-idx * 500}px)`;
    }
});

const modulesTemplate = document.querySelector('#modules-template');
const modulesBox1 = document.querySelector('#modules-box1');
const modulesBox2 = document.querySelector('#modules-box2');
const cloneModulesTemplate = modulesTemplate.content.cloneNode(true);

moduleInfo.forEach((item) => {
    for (let i = 0; i < item.imagens.length; i++) {
        switch (i) {
            case 0:
            case 2:
            case 4:
            case 6:
            case 8:
            case 10:
                const infobox1 = cloneModulesTemplate.querySelector('.modules-infobox1').cloneNode(true);
                infobox1.style.backgroundImage = `url('${item.imagens[i]}')`;
                infobox1.setAttribute("data-aos", "fade-right");
                infobox1.querySelector('.saiba-mais-info span').textContent = item.titulos[i];
                infobox1.querySelector('.saiba-mais-info p').textContent = item.info[i];
                modulesBox1.appendChild(infobox1);
                break;
            case 1:
            case 3:
            case 5:
            case 7:
            case 9:
                const infobox2 = cloneModulesTemplate.querySelector('.modules-infobox2').cloneNode(true);
                infobox2.style.backgroundImage = `url('${item.imagens[i]}')`;
                infobox2.setAttribute("data-aos", "fade-left");
                infobox2.setAttribute("data-aos-delay", "300");
                infobox2.querySelector('.saiba-mais-info span').textContent = item.titulos[i];
                infobox2.querySelector('.saiba-mais-info p').textContent = item.info[i];
                modulesBox2.appendChild(infobox2);
                break;
        }
    }
});

const botoes = document.querySelectorAll(".saiba-mais")
const saibaMaisInfo = document.querySelectorAll('.saiba-mais-info');


botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        if (botao.classList.contains("selecionado") == true) {
            botao.classList.remove("selecionado");
            botao.querySelector("i").classList.remove("fa-angles-down");
            botao.querySelector("i").classList.add("fa-angles-up");
        } else {
            botao.classList.add("selecionado");
            botao.querySelector("i").classList.remove("fa-angles-up");
            botao.querySelector("i").classList.add("fa-angles-down");
        }

        if (saibaMaisInfo[indice].classList.contains("slideUp") == true) {
            saibaMaisInfo[indice].classList.remove("slideUp");
            saibaMaisInfo[indice].style.transform = "translateY(120%)";
        } else {
            saibaMaisInfo[indice].style.transform = "translateY(0%)"
            saibaMaisInfo[indice].classList.add("slideUp");
        }
    })
});

document.addEventListener("scroll", () => {
    const whatsButtonSticky = document.querySelector(".whats-button-sticky");
    let rolagemVertical = window.scrollY;

    if (rolagemVertical >= 2400) {
        whatsButtonSticky.style.cursor = "pointer";
        whatsButtonSticky.style.opacity = "1";
    } else if (rolagemVertical <= 2200) {
        whatsButtonSticky.style.opacity = "0";
        whatsButtonSticky.style.cursor = "default";
    }
})

advantagesInfo.forEach((item) => {
    const advantagesTemplate = document.querySelector('#advantages-template');
    const advantageContainer = document.querySelector('#advantages-container');
    for (let i = 0; i < item.titulos.length; i++) {
        const advantagesTemplateClone = advantagesTemplate.content.cloneNode(true);
        advantagesTemplateClone.querySelector('.advantage').style.animationDelay = `${i}s`;
        advantagesTemplateClone.querySelector('.advantage-title').textContent = item.titulos[i];
        advantagesTemplateClone.querySelector('.advantage-description').textContent = item.descricao[i];
        advantageContainer.appendChild(advantagesTemplateClone);
    }
})

benefitsInfo.forEach((item) => {
    const benefitsTemplate = document.querySelector("#benefits-template");
    const firstDiv = document.querySelector('#first');
    const secondDiv = document.querySelector('#second');
    const thirdDiv = document.querySelector('#third');

    for (let i = 0; i < item.beneficios.length; i++) {
        const benefitsTemplateClone = benefitsTemplate.content.cloneNode(true);
        benefitsTemplateClone.querySelector('#benefits-list #benefit').textContent = item.beneficios[i];
        firstDiv.appendChild(benefitsTemplateClone);
    }

    moduleInfo.forEach((item) => {
        for (i = 0; i < item.titulos.length; i++) {
            const modulosTemplateClone = benefitsTemplate.content.cloneNode(true);
            modulosTemplateClone.querySelector('#benefits-list #benefit').textContent = item.titulos[i];
            secondDiv.appendChild(modulosTemplateClone);
        }
    })

    for (let u = 0; u < item.cursos.length; u++) {
        const cursosTemplateClone = benefitsTemplate.content.cloneNode(true);
        cursosTemplateClone.querySelector('#benefits-list #benefit').textContent = item.cursos[u];
        thirdDiv.appendChild(cursosTemplateClone);

    }

})

questionsInfo.forEach((item) => {
    const questionsTemplate = document.querySelector('#questions-template');
    const questionsContainer = document.querySelector('#questions-container');

    for (let i = 0; i < item.perguntas.length; i++) {
        const questionsTemplateClone = questionsTemplate.content.cloneNode(true);
        questionsTemplateClone.querySelector('#question span').textContent = item.perguntas[i];
        questionsTemplateClone.querySelector('#answer p').textContent = item.respostas[i];
        questionsContainer.appendChild(questionsTemplateClone);
    }
})

const questionDiv = document.querySelectorAll('#question');
const answerDiv = document.querySelectorAll('#answer');

questionDiv.forEach((question, indice) => {
    question.addEventListener('click', () => {
        if (question.classList.contains('selecionado') == true) {
            question.classList.remove('selecionado');
            question.querySelector('i').classList.remove('fa-circle-chevron-down');
            question.querySelector('i').classList.add('fa-circle-chevron-right');
            setTimeout(() => {
                answerDiv[indice].style.opacity = "0";
            }, 200);
            answerDiv[indice].style.transform = "translateY(0)";
        } else {
            question.classList.add('selecionado');
            question.querySelector('i').classList.remove('fa-circle-chevron-right');
            question.querySelector('i').classList.add('fa-circle-chevron-down');
            answerDiv[indice].style.transform = "translateY(105px)";
            setTimeout(() => {
                answerDiv[indice].style.opacity = "1";
            }, 450);
        }
    })
})




