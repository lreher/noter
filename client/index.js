import m from "mithril";

var root = document.body;

var app = createApp();

m.render(root, app.view());

function createApp() {
    return {
        view: () => {
            return m('div', { class: "app" }, [
                m('div', { class: 'title' }, [
                    m('h1', "Noter"),
                ]),
                m('div', { class: 'body' }, [
                    m('div', { class: 'options' }, [
                        m('h4', { class: 'my-notebooks' }, "My notebooks"),
                        m('h4', { class: 'new-notebook' }, "New notebook")
                    ])
                ]),
            ]);
        }
    }
}


// var myComponent = testComponent();

// m.render(root, myComponent.view());

// function testComponent() {
//     var counter = 0;

//     function addCount() {
//         counter += 1;

//         m.render(root, myComponent.view());
//     }

//     return {
//         view: () => {
//             return m('div', { class: "app" }, [
//                 m('h1', "My Counter " + counter),
//                 m('button', { class: "hello", onclick: addCount }, "My Button")
//             ]);
//         }
//     }
// }