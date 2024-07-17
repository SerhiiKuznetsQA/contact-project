import{S as o,c as r,l as i,a,b as s,d,e as u,g as m}from"./api-146736d6.js";const c=({id:e,name:t,number:n})=>`
      <li class="list-item" id="${e}">
      <p>Name: ${t}</p>
      <p>Number: ${n}</p>
      <button class="delete-btn">Delete</button>
      </li>
     `,g=localStorage.getItem(o);g===null&&location.replace("/");r.addEventListener("submit",p);i.addEventListener("click",f);a.addEventListener("click",v);function p(e){e.preventDefault();const{name:t,number:n}=e.currentTarget.elements;s({name:t.value,number:n.value}).then(l=>{a.insertAdjacentHTML("beforeend",c(l)),r.reset()})}function b(){m().then(e=>{a.insertAdjacentHTML("beforeend",e.map(c).join(""))})}b();function f(){d().then(()=>{localStorage.removeItem(o),location.replace("/")})}function v(e){e.target.nodeName==="BUTTON"&&u(e.target.parentNode.id).then(()=>{e.target.parentNode.remove()})}
