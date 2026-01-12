function customRender(reactelement, container) {
  const domelement = document.createElement(reactelement.type);
  domelement.innerHTML = reactelement.children;
  domelement.setAttribute("href", reactelement.props.href);
  domelement.setAttribute("traget", reactelement.props.target);
  container.appendChild(domelement);
}
const reactelement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};
const mainContainer = document.querySelector("#root");

customRender(reactelement, mainContainer);
