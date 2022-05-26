import React from 'react'
import './content.css'

function Content(props) {
    return (
        <div className='content-box'>
            <p class="strong">
                <strong>Oi meus docinhos, tudo bem? Eu sou a Guru! ♡</strong>
            </p>
            <p>
                Não, esse não é meu verdadeiro nome, mas acho que depois de me conhecer vai entender porque me chamam assim.
            </p>
            <p>
                Eu adoro vagar por Teyvat ouvindo histórias, explorando e estudando sobre tudo (quero dizer, TUUUDO!), e claro, conhecendo outros aventureiros.
            </p>
            <p>
                Estes últimos sempre estão muito perdidos... “Ai, não sei como aumentar meu dano”, “Qual artefato devo aprimorar?”, “Não consigo passar o último andar do Abismo!”. Acham que existe fórmula mágica... mas gente, cada um tem que saber se virar com o que tem, certo?
            </p>
            <p>
                Aí eu pensei: Por que não usar meus conhecimentos para ajudar de forma personalizada e analisar tudo o que vocês quiserem? Artefatos, builds, os talentos específicos da sua visão, tudo! E claro, de repente até contar outras... curiosidades que você tenham sobre mim.
            </p>
            <p>
                Mas como sou nova nisso, ficaria super agradecida se vocês respondessem umas 3 perguntinhas rápidos para me ajudar. Estou muito interessada em saber o que mais vocês gostariam de ver por aqui.
            </p>
            <p class="strong">
                <strong>É só clicar nesse link aqui!</strong>
            </p>
            <button class="pesquisa" onClick={() => props.setSurveyPopup(true)}>
                RESPONDER PESQUISA
            </button>
        </div>
    )
}

export default Content