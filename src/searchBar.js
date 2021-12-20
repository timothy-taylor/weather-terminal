import * as Icons from './icons.js';

export default function() {
    const element = document.createElement('DIV');
    element.id = 'searchbar';

    const icon = document.createElement('SPAN');
    icon.innerHTML = Icons.chevronRight;

    const searchform = document.createElement('FORM');
    searchform.name = "searchform";

    const input = document.createElement('INPUT');
    input.id = 'zipcode';
    input.type = 'text';
    input.name = 'search';
    input.placeholder = 'enter u.s. zipcode';
    input.required = true;
    input.pattern = '[0-9]*';
    const submit = document.createElement('BUTTON');
    submit.type = 'submit';
    submit.innerHTML = Icons.search;

    searchform.appendChild(icon);
    searchform.appendChild(input);
    searchform.appendChild(submit);

    element.appendChild(searchform);
    document.body.appendChild(element);
}
