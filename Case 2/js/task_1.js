'use strict'

let registryForm = document.forms.registry;

let name = registryForm.elements.name;
let group = registryForm.elements.group;
let hobby = registryForm.elements.hobby;
let tel = registryForm.elements.tel;

let re = new RegExp(tel.pattern);

function addMessage() {
    if (re.test(tel.value)) {
        let div = document.createElement('div');
        div.innerHTML = `Привет, ${name.value}! Ты из ${group.value} группы, верно? Отлично. Здорово, что ты любишь ${hobby.value}. Свяжусь с тобой по телефону ${tel.value}`;
        document.body.append(div);
        return false;
    }
}