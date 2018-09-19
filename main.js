

 cssSize: true, // 不使用内部 size 作为节点尺寸
 getHtml: function(cfg){
   const model = cfg.model;
   const container = Util.createDOM('<div class="node-conatiner"></div>');
   const title = Util.createDOM(`<div class="node-conatiner-title node-conatiner-${model.status}">
     ${model.stationName}
   </div>`);
   container.appendChild(title);
   if(model.trains.length>0){
       for(let i=0;i<model.trains.length;i++){
           const list = Util.createDOM(`<div class="node-conatiner-list ">
               <span>车次：</span>
           <span ><a href="https://www.baidu.com/s?wd=${model.trains[i]}" title=${model.trains[i]}  style=" position: absolute; z-index: 100;">${model.trains[i]}</a></span>
           </div>`);
           container.appendChild(list);
       }
   }
   // const botton = Util.createDOM(`<button class="node-delete">X</button>`);
   // botton.addEventListener('click', function(){
   //   net.remove(net.find(model.id));
   // });
   // container.appendChild(botton);
   return container;
   }