import{S as L,i as y,s as I,c as K,e as p,x as W,a as S,b as g,d as b,y as Z,f as U,g as f,h as s,C as V,D as ee,j as te,k as l,l as F,m as $,u as oe,n as se,o as ae,A as ne,t as re,q as ie,v as ue,E as le}from"./index.BYyvZe9O.js";import{g as ce,a as G,s as de}from"./setting-utils.B5sRXqnj.js";var Y=(e=>(e[e.Home=0]="Home",e[e.Archive=1]="Archive",e[e.About=2]="About",e))(Y||{});const me={title:"Chippalrus",subtitle:"Zero discipline, all-purpose flour.",lang:"en",themeHue:250,banner:{enable:!0,src:"assets/images/1080.png"}};Y.Archive;var e=(e=>(e.home="home",e.about="about",e.archive="archive",e.tags="tags",e.categories="categories",e.recentPosts="recentPosts",e.comments="comments",e.untitled="untitled",e.uncategorized="uncategorized",e.noTags="noTags",e.wordCount="wordCount",e.wordsCount="wordsCount",e.minuteCount="minuteCount",e.minutesCount="minutesCount",e.postCount="postCount",e.postsCount="postsCount",e.themeColor="themeColor",e.more="more",e.author="author",e.publishedAt="publishedAt",e.license="license",e))(e||{});const z={[e.home]:"Home",[e.about]:"About",[e.archive]:"Archive",[e.tags]:"Tags",[e.categories]:"Categories",[e.recentPosts]:"Recent Posts",[e.comments]:"Comments",[e.untitled]:"Untitled",[e.uncategorized]:"Uncategorized",[e.noTags]:"No Tags",[e.wordCount]:"word",[e.wordsCount]:"words",[e.minuteCount]:"minute",[e.minutesCount]:"minutes",[e.postCount]:"post",[e.postsCount]:"posts",[e.themeColor]:"Theme Color",[e.more]:"More",[e.author]:"Author",[e.publishedAt]:"Published at",[e.license]:"License"},J={[e.home]:"Home",[e.about]:"About",[e.archive]:"Archive",[e.tags]:"タグ",[e.categories]:"カテゴリ",[e.recentPosts]:"最近の投稿",[e.comments]:"コメント",[e.untitled]:"タイトルなし",[e.uncategorized]:"カテゴリなし",[e.noTags]:"タグなし",[e.wordCount]:"文字",[e.wordsCount]:"文字",[e.minuteCount]:"分",[e.minutesCount]:"分",[e.postCount]:"件の投稿",[e.postsCount]:"件の投稿",[e.themeColor]:"テーマカラー",[e.more]:"もっと",[e.author]:"作者",[e.publishedAt]:"公開日",[e.license]:"ライセンス"},he={[e.home]:"主页",[e.about]:"关于",[e.archive]:"归档",[e.tags]:"标签",[e.categories]:"分类",[e.recentPosts]:"最新文章",[e.comments]:"评论",[e.untitled]:"无标题",[e.uncategorized]:"未分类",[e.noTags]:"无标签",[e.wordCount]:"字",[e.wordsCount]:"字",[e.minuteCount]:"分钟",[e.minutesCount]:"分钟",[e.postCount]:"篇文章",[e.postsCount]:"篇文章",[e.themeColor]:"主题色",[e.more]:"更多",[e.author]:"作者",[e.publishedAt]:"发布于",[e.license]:"许可协议"},pe={[e.home]:"首頁",[e.about]:"關於",[e.archive]:"彙整",[e.tags]:"標籤",[e.categories]:"分類",[e.recentPosts]:"最新文章",[e.comments]:"評論",[e.untitled]:"無標題",[e.uncategorized]:"未分類",[e.noTags]:"無標籤",[e.wordCount]:"字",[e.wordsCount]:"字",[e.minuteCount]:"分鐘",[e.minutesCount]:"分鐘",[e.postCount]:"篇文章",[e.postsCount]:"篇文章",[e.themeColor]:"主題色",[e.more]:"更多",[e.author]:"作者",[e.publishedAt]:"發佈於",[e.license]:"許可協議"},ge=z,fe={en:z,en_us:z,en_gb:z,en_au:z,zh_cn:he,zh_tw:pe,ja:J,ja_jp:J};function _e(e){return fe[e.toLowerCase()]||ge}function Q(e){return _e(me.lang)[e]}const be=e=>({}),X=e=>({});function ve(t){let o,a,n,r,i,u,c,d,m,h,C,v,w,x,k,A,y,z=Q(e.themeColor)+"";const T=t[4]["restore-icon"],_=K(T,t,t[3],X);return{c(){o=p("div"),a=p("div"),n=p("div"),r=W(z),i=S(),u=p("button"),c=p("div"),_&&_.c(),d=S(),m=p("div"),h=p("div"),C=W(t[0]),v=S(),w=p("div"),x=p("input"),this.h()},l(e){o=g(e,"DIV",{id:!0,class:!0});var s=b(o);a=g(s,"DIV",{class:!0});var l=b(a);n=g(l,"DIV",{class:!0});var p=b(n);r=Z(p,z),i=U(p),u=g(p,"BUTTON",{"aria-label":!0,class:!0});var $=b(u);c=g($,"DIV",{class:!0});var k=b(c);_&&_.l(k),k.forEach(f),$.forEach(f),p.forEach(f),d=U(l),m=g(l,"DIV",{class:!0});var A=b(m);h=g(A,"DIV",{id:!0,class:!0});var y=b(h);C=Z(y,t[0]),y.forEach(f),A.forEach(f),l.forEach(f),v=U(s),w=g(s,"DIV",{class:!0});var V=b(w);x=g(V,"INPUT",{"aria-label":!0,type:!0,min:!0,max:!0,class:!0,id:!0,step:!0,style:!0}),V.forEach(f),s.forEach(f),this.h()},h(){s(c,"class","text-[var(--btn-content)] svelte-3akcb9"),s(u,"aria-label","Reset to Default"),s(u,"class","btn-regular w-7 h-7 rounded-md active:scale-90 svelte-3akcb9"),V(u,"opacity-0",t[0]===t[1]),V(u,"pointer-events-none",t[0]===t[1]),s(n,"class","flex gap-2 font-bold text-lg text-neutral-900 dark:text-neutral-100 transition relative ml-3 before:w-1 before:h-4 before:rounded-md before:bg-[var(--primary)] before:absolute before:-left-3 before:top-[0.33rem] svelte-3akcb9"),s(h,"id","hueValue"),s(h,"class","transition bg-[var(--btn-regular-bg)] w-10 h-7 rounded-md flex justify-center font-bold text-sm items-center text-[var(--btn-content)] svelte-3akcb9"),s(m,"class","flex gap-1 svelte-3akcb9"),s(a,"class","flex flex-row gap-2 mb-3 items-center justify-between svelte-3akcb9"),s(x,"aria-label",Q(e.themeColor)),s(x,"type","range"),s(x,"min","0"),s(x,"max","360"),s(x,"class","slider svelte-3akcb9"),s(x,"id","colorSlider"),s(x,"step","5"),ee(x,"width","100%"),s(w,"class","w-full h-6 px-1 bg-[oklch(0.80_0.10_0)] dark:bg-[oklch(0.70_0.10_0)] rounded select-none svelte-3akcb9"),s(o,"id","display-setting"),s(o,"class","float-panel closed absolute transition-all w-80 fixed right-4 px-4 py-4 svelte-3akcb9")},m(e,s){te(e,o,s),l(o,a),l(a,n),l(n,r),l(n,i),l(n,u),l(u,c),_&&_.m(c,null),l(a,d),l(a,m),l(m,h),l(h,C),l(o,v),l(o,w),l(w,x),F(x,t[0]),k=!0,A||(y=[$(u,"click",t[2]),$(x,"change",t[5]),$(x,"input",t[5])],A=!0)},p(e,[t]){_&&_.p&&(!k||8&t)&&oe(_,T,e,e[3],k?ae(T,e[3],t,be):se(e[3]),X),(!k||3&t)&&V(u,"opacity-0",e[0]===e[1]),(!k||3&t)&&V(u,"pointer-events-none",e[0]===e[1]),(!k||1&t)&&ne(C,e[0]),1&t&&F(x,e[0])},i(e){k||(re(_,e),k=!0)},o(e){ie(_,e),k=!1},d(e){e&&f(o),_&&_.d(e),A=!1,ue(y)}}}function Ce(e,t,s){let{$$slots:o={},$$scope:a}=t,n=ce();const r=G();return e.$$set=e=>{"$$scope"in e&&s(3,a=e.$$scope)},e.$$.update=()=>{1&e.$$.dirty&&(n||0===n)&&de(n)},[n,r,function(){s(0,n=G())},a,o,function(){n=le(this.value),s(0,n)}]}class ke extends L{constructor(e){super(),y(this,e,Ce,ve,I,{})}}export{ke as default};