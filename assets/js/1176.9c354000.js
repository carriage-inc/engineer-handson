"use strict";(self.webpackChunkhandson=self.webpackChunkhandson||[]).push([[1176],{21176:(n,e,r)=>{r.d(e,{Zp:()=>Ce});var t=r(8058),o=r(5664),i=r(48585),u=r(39142),a=r(34098),d=r(74722),c=r(91395),f=r(697);class s{constructor(){var n={};n._next=n._prev=n,this._sentinel=n}dequeue(){var n=this._sentinel,e=n._prev;if(e!==n)return v(e),e}enqueue(n){var e=this._sentinel;n._prev&&n._next&&v(n),n._next=e._next,e._next._prev=n,e._next=n,n._prev=e}toString(){for(var n=[],e=this._sentinel,r=e._prev;r!==e;)n.push(JSON.stringify(r,g)),r=r._prev;return"["+n.join(", ")+"]"}}function v(n){n._prev._next=n._next,n._next._prev=n._prev,delete n._next,delete n._prev}function g(n,e){if("_next"!==n&&"_prev"!==n)return e}var h=u.A(1);function l(n,e){if(n.nodeCount()<=1)return[];var r=function(n,e){var r=new f.T,o=0,i=0;t.A(n.nodes(),(function(n){r.setNode(n,{v:n,in:0,out:0})})),t.A(n.edges(),(function(n){var t=r.edge(n.v,n.w)||0,u=e(n),a=t+u;r.setEdge(n.v,n.w,a),i=Math.max(i,r.node(n.v).out+=u),o=Math.max(o,r.node(n.w).in+=u)}));var u=c.A(i+o+3).map((function(){return new s})),a=o+1;return t.A(r.nodes(),(function(n){p(u,a,r.node(n))})),{graph:r,buckets:u,zeroIdx:a}}(n,e||h),o=function(n,e,r){var t,o=[],i=e[e.length-1],u=e[0];for(;n.nodeCount();){for(;t=u.dequeue();)A(n,e,r,t);for(;t=i.dequeue();)A(n,e,r,t);if(n.nodeCount())for(var a=e.length-2;a>0;--a)if(t=e[a].dequeue()){o=o.concat(A(n,e,r,t,!0));break}}return o}(r.graph,r.buckets,r.zeroIdx);return a.A(d.A(o,(function(e){return n.outEdges(e.v,e.w)})))}function A(n,e,r,o,i){var u=i?[]:void 0;return t.A(n.inEdges(o.v),(function(t){var o=n.edge(t),a=n.node(t.v);i&&u.push({v:t.v,w:t.w}),a.out-=o,p(e,r,a)})),t.A(n.outEdges(o.v),(function(t){var o=n.edge(t),i=t.w,u=n.node(i);u.in-=o,p(e,r,u)})),n.removeNode(o.v),u}function p(n,e,r){r.out?r.in?n[r.out-r.in+e].enqueue(r):n[n.length-1].enqueue(r):n[0].enqueue(r)}function w(n){var e="greedy"===n.graph().acyclicer?l(n,function(n){return function(e){return n.edge(e).weight}}(n)):function(n){var e=[],r={},o={};function u(a){i.A(o,a)||(o[a]=!0,r[a]=!0,t.A(n.outEdges(a),(function(n){i.A(r,n.w)?e.push(n):u(n.w)})),delete r[a])}return t.A(n.nodes(),u),e}(n);t.A(e,(function(e){var r=n.edge(e);n.removeEdge(e),r.forwardName=e.name,r.reversed=!0,n.setEdge(e.w,e.v,r,o.A("rev"))}))}var m=r(98879),b=r(81942),y=r(23068),x=r(61882);const k=function(n,e,r){for(var t=-1,o=n.length;++t<o;){var i=n[t],u=e(i);if(null!=u&&(void 0===a?u==u&&!(0,x.A)(u):r(u,a)))var a=u,d=i}return d};const E=function(n,e){return n>e};var N=r(29008);const _=function(n){return n&&n.length?k(n,N.A,E):void 0};const I=function(n){var e=null==n?0:n.length;return e?n[e-1]:void 0};var T=r(52528),R=r(79841),M=r(49574);const L=function(n,e){var r={};return e=(0,M.A)(e,3),(0,R.A)(n,(function(n,t,o){(0,T.A)(r,t,e(n,t,o))})),r};var C=r(69592);const O=function(n,e){return n<e};const P=function(n){return n&&n.length?k(n,N.A,O):void 0};var S=r(41917);const j=function(){return S.A.Date.now()};function F(n,e,r,t){var i;do{i=o.A(t)}while(n.hasNode(i));return r.dummy=e,n.setNode(i,r),i}function G(n){var e=new f.T({multigraph:n.isMultigraph()}).setGraph(n.graph());return t.A(n.nodes(),(function(r){n.children(r).length||e.setNode(r,n.node(r))})),t.A(n.edges(),(function(r){e.setEdge(r,n.edge(r))})),e}function V(n,e){var r,t,o=n.x,i=n.y,u=e.x-o,a=e.y-i,d=n.width/2,c=n.height/2;if(!u&&!a)throw new Error("Not possible to find intersection inside of the rectangle");return Math.abs(a)*d>Math.abs(u)*c?(a<0&&(c=-c),r=c*u/a,t=c):(u<0&&(d=-d),r=d,t=d*a/u),{x:o+r,y:i+t}}function B(n){var e=d.A(c.A(Y(n)+1),(function(){return[]}));return t.A(n.nodes(),(function(r){var t=n.node(r),o=t.rank;C.A(o)||(e[o][t.order]=r)})),e}function q(n,e,r,t){var o={width:0,height:0};return arguments.length>=4&&(o.rank=r,o.order=t),F(n,"border",o,e)}function Y(n){return _(d.A(n.nodes(),(function(e){var r=n.node(e).rank;if(!C.A(r))return r})))}function z(n,e){var r=j();try{return e()}finally{console.log(n+" time: "+(j()-r)+"ms")}}function D(n,e){return e()}function $(n,e,r,t,o,i){var u={width:0,height:0,rank:i,borderType:e},a=o[e][i-1],d=F(n,"border",u,r);o[e][i]=d,n.setParent(d,t),a&&n.setEdge(a,d,{weight:1})}function J(n){var e=n.graph().rankdir.toLowerCase();"bt"!==e&&"rl"!==e||function(n){t.A(n.nodes(),(function(e){K(n.node(e))})),t.A(n.edges(),(function(e){var r=n.edge(e);t.A(r.points,K),i.A(r,"y")&&K(r)}))}(n),"lr"!==e&&"rl"!==e||(!function(n){t.A(n.nodes(),(function(e){Q(n.node(e))})),t.A(n.edges(),(function(e){var r=n.edge(e);t.A(r.points,Q),i.A(r,"x")&&Q(r)}))}(n),Z(n))}function Z(n){t.A(n.nodes(),(function(e){H(n.node(e))})),t.A(n.edges(),(function(e){H(n.edge(e))}))}function H(n){var e=n.width;n.width=n.height,n.height=e}function K(n){n.y=-n.y}function Q(n){var e=n.x;n.x=n.y,n.y=e}function U(n){n.graph().dummyChains=[],t.A(n.edges(),(function(e){!function(n,e){var r,t,o,i=e.v,u=n.node(i).rank,a=e.w,d=n.node(a).rank,c=e.name,f=n.edge(e),s=f.labelRank;if(d===u+1)return;for(n.removeEdge(e),o=0,++u;u<d;++o,++u)f.points=[],r=F(n,"edge",t={width:0,height:0,edgeLabel:f,edgeObj:e,rank:u},"_d"),u===s&&(t.width=f.width,t.height=f.height,t.dummy="edge-label",t.labelpos=f.labelpos),n.setEdge(i,r,{weight:f.weight},c),0===o&&n.graph().dummyChains.push(r),i=r;n.setEdge(i,a,{weight:f.weight},c)}(n,e)}))}const W=function(n,e){return n&&n.length?k(n,(0,M.A)(e,2),O):void 0};function X(n){var e={};t.A(n.sources(),(function r(t){var o=n.node(t);if(i.A(e,t))return o.rank;e[t]=!0;var u=P(d.A(n.outEdges(t),(function(e){return r(e.w)-n.edge(e).minlen})));return u!==Number.POSITIVE_INFINITY&&null!=u||(u=0),o.rank=u}))}function nn(n,e){return n.node(e.w).rank-n.node(e.v).rank-n.edge(e).minlen}function en(n){var e,r,t=new f.T({directed:!1}),o=n.nodes()[0],i=n.nodeCount();for(t.setNode(o,{});rn(t,n)<i;)e=tn(t,n),r=t.hasNode(e.v)?nn(n,e):-nn(n,e),on(t,n,r);return t}function rn(n,e){return t.A(n.nodes(),(function r(o){t.A(e.nodeEdges(o),(function(t){var i=t.v,u=o===i?t.w:i;n.hasNode(u)||nn(e,t)||(n.setNode(u,{}),n.setEdge(o,u,{}),r(u))}))})),n.nodeCount()}function tn(n,e){return W(e.edges(),(function(r){if(n.hasNode(r.v)!==n.hasNode(r.w))return nn(e,r)}))}function on(n,e,r){t.A(n.nodes(),(function(n){e.node(n).rank+=r}))}var un=r(38446),an=r(27422);const dn=function(n){return function(e,r,t){var o=Object(e);if(!(0,un.A)(e)){var i=(0,M.A)(r,3);e=(0,an.A)(e),r=function(n){return i(o[n],n,o)}}var u=n(e,r,t);return u>-1?o[i?e[u]:u]:void 0}};var cn=r(25707),fn=r(74342);const sn=function(n){var e=(0,fn.A)(n),r=e%1;return e==e?r?e-r:e:0};var vn=Math.max;const gn=dn((function(n,e,r){var t=null==n?0:n.length;if(!t)return-1;var o=null==r?0:sn(r);return o<0&&(o=vn(t+o,0)),(0,cn.A)(n,(0,M.A)(e,3),o)}));var hn=r(11662);u.A(1);u.A(1);r(69471),r(9779),r(88496);var ln=r(92049);r(53098);(0,r(70805).A)("length");RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var An="\\ud800-\\udfff",pn="["+An+"]",wn="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",mn="\\ud83c[\\udffb-\\udfff]",bn="[^"+An+"]",yn="(?:\\ud83c[\\udde6-\\uddff]){2}",xn="[\\ud800-\\udbff][\\udc00-\\udfff]",kn="(?:"+wn+"|"+mn+")"+"?",En="[\\ufe0e\\ufe0f]?",Nn=En+kn+("(?:\\u200d(?:"+[bn,yn,xn].join("|")+")"+En+kn+")*"),_n="(?:"+[bn+wn+"?",wn,yn,xn,pn].join("|")+")";RegExp(mn+"(?="+mn+")|"+_n+Nn,"g");function In(){}function Tn(n,e,r){ln.A(e)||(e=[e]);var o=(n.isDirected()?n.successors:n.neighbors).bind(n),i=[],u={};return t.A(e,(function(e){if(!n.hasNode(e))throw new Error("Graph does not have node: "+e);Rn(n,e,"post"===r,u,o,i)})),i}function Rn(n,e,r,o,u,a){i.A(o,e)||(o[e]=!0,r||a.push(e),t.A(u(e),(function(e){Rn(n,e,r,o,u,a)})),r&&a.push(e))}In.prototype=new Error;r(73046);function Mn(n){n=function(n){var e=(new f.T).setGraph(n.graph());return t.A(n.nodes(),(function(r){e.setNode(r,n.node(r))})),t.A(n.edges(),(function(r){var t=e.edge(r.v,r.w)||{weight:0,minlen:1},o=n.edge(r);e.setEdge(r.v,r.w,{weight:t.weight+o.weight,minlen:Math.max(t.minlen,o.minlen)})})),e}(n),X(n);var e,r=en(n);for(On(r),Ln(r,n);e=Sn(r);)Fn(r,n,e,jn(r,n,e))}function Ln(n,e){var r=function(n,e){return Tn(n,e,"post")}(n,n.nodes());r=r.slice(0,r.length-1),t.A(r,(function(r){!function(n,e,r){var t=n.node(r),o=t.parent;n.edge(r,o).cutvalue=Cn(n,e,r)}(n,e,r)}))}function Cn(n,e,r){var o=n.node(r).parent,i=!0,u=e.edge(r,o),a=0;return u||(i=!1,u=e.edge(o,r)),a=u.weight,t.A(e.nodeEdges(r),(function(t){var u,d,c=t.v===r,f=c?t.w:t.v;if(f!==o){var s=c===i,v=e.edge(t).weight;if(a+=s?v:-v,u=r,d=f,n.hasEdge(u,d)){var g=n.edge(r,f).cutvalue;a+=s?-g:g}}})),a}function On(n,e){arguments.length<2&&(e=n.nodes()[0]),Pn(n,{},1,e)}function Pn(n,e,r,o,u){var a=r,d=n.node(o);return e[o]=!0,t.A(n.neighbors(o),(function(t){i.A(e,t)||(r=Pn(n,e,r,t,o))})),d.low=a,d.lim=r++,u?d.parent=u:delete d.parent,r}function Sn(n){return gn(n.edges(),(function(e){return n.edge(e).cutvalue<0}))}function jn(n,e,r){var t=r.v,o=r.w;e.hasEdge(t,o)||(t=r.w,o=r.v);var i=n.node(t),u=n.node(o),a=i,d=!1;i.lim>u.lim&&(a=u,d=!0);var c=hn.A(e.edges(),(function(e){return d===Gn(n,n.node(e.v),a)&&d!==Gn(n,n.node(e.w),a)}));return W(c,(function(n){return nn(e,n)}))}function Fn(n,e,r,o){var i=r.v,u=r.w;n.removeEdge(i,u),n.setEdge(o.v,o.w,{}),On(n),Ln(n,e),function(n,e){var r=gn(n.nodes(),(function(n){return!e.node(n).parent})),o=function(n,e){return Tn(n,e,"pre")}(n,r);o=o.slice(1),t.A(o,(function(r){var t=n.node(r).parent,o=e.edge(r,t),i=!1;o||(o=e.edge(t,r),i=!0),e.node(r).rank=e.node(t).rank+(i?o.minlen:-o.minlen)}))}(n,e)}function Gn(n,e,r){return r.low<=e.lim&&e.lim<=r.lim}function Vn(n){switch(n.graph().ranker){case"network-simplex":default:qn(n);break;case"tight-tree":!function(n){X(n),en(n)}(n);break;case"longest-path":Bn(n)}}Mn.initLowLimValues=On,Mn.initCutValues=Ln,Mn.calcCutValue=Cn,Mn.leaveEdge=Sn,Mn.enterEdge=jn,Mn.exchangeEdges=Fn;var Bn=X;function qn(n){Mn(n)}var Yn=r(38207),zn=r(89463);function Dn(n){var e=F(n,"root",{},"_root"),r=function(n){var e={};function r(o,i){var u=n.children(o);u&&u.length&&t.A(u,(function(n){r(n,i+1)})),e[o]=i}return t.A(n.children(),(function(n){r(n,1)})),e}(n),o=_(Yn.A(r))-1,i=2*o+1;n.graph().nestingRoot=e,t.A(n.edges(),(function(e){n.edge(e).minlen*=i}));var u=function(n){return zn.A(n.edges(),(function(e,r){return e+n.edge(r).weight}),0)}(n)+1;t.A(n.children(),(function(t){$n(n,e,i,u,o,r,t)})),n.graph().nodeRankFactor=i}function $n(n,e,r,o,i,u,a){var d=n.children(a);if(d.length){var c=q(n,"_bt"),f=q(n,"_bb"),s=n.node(a);n.setParent(c,a),s.borderTop=c,n.setParent(f,a),s.borderBottom=f,t.A(d,(function(t){$n(n,e,r,o,i,u,t);var d=n.node(t),s=d.borderTop?d.borderTop:t,v=d.borderBottom?d.borderBottom:t,g=d.borderTop?o:2*o,h=s!==v?1:i-u[a]+1;n.setEdge(c,s,{weight:g,minlen:h,nestingEdge:!0}),n.setEdge(v,f,{weight:g,minlen:h,nestingEdge:!0})})),n.parent(a)||n.setEdge(e,c,{weight:0,minlen:i+u[a]})}else a!==e&&n.setEdge(e,a,{weight:0,minlen:r})}var Jn=r(91641);const Zn=function(n){return(0,Jn.A)(n,5)};function Hn(n,e,r){var u=function(n){var e;for(;n.hasNode(e=o.A("_root")););return e}(n),a=new f.T({compound:!0}).setGraph({root:u}).setDefaultNodeLabel((function(e){return n.node(e)}));return t.A(n.nodes(),(function(o){var d=n.node(o),c=n.parent(o);(d.rank===e||d.minRank<=e&&e<=d.maxRank)&&(a.setNode(o),a.setParent(o,c||u),t.A(n[r](o),(function(e){var r=e.v===o?e.w:e.v,t=a.edge(r,o),i=C.A(t)?0:t.weight;a.setEdge(r,o,{weight:n.edge(e).weight+i})})),i.A(d,"minRank")&&a.setNode(o,{borderLeft:d.borderLeft[e],borderRight:d.borderRight[e]}))})),a}var Kn=r(52851);const Qn=function(n,e,r){for(var t=-1,o=n.length,i=e.length,u={};++t<o;){var a=t<i?e[t]:void 0;r(u,n[t],a)}return u};const Un=function(n,e){return Qn(n||[],e||[],Kn.A)};var Wn=r(13588),Xn=r(45572),ne=r(66318),ee=r(52568);const re=function(n,e){var r=n.length;for(n.sort(e);r--;)n[r]=n[r].value;return n};var te=r(52789);const oe=function(n,e){if(n!==e){var r=void 0!==n,t=null===n,o=n==n,i=(0,x.A)(n),u=void 0!==e,a=null===e,d=e==e,c=(0,x.A)(e);if(!a&&!c&&!i&&n>e||i&&u&&d&&!a&&!c||t&&u&&d||!r&&d||!o)return 1;if(!t&&!i&&!c&&n<e||c&&r&&o&&!t&&!i||a&&r&&o||!u&&o||!d)return-1}return 0};const ie=function(n,e,r){for(var t=-1,o=n.criteria,i=e.criteria,u=o.length,a=r.length;++t<u;){var d=oe(o[t],i[t]);if(d)return t>=a?d:d*("desc"==r[t]?-1:1)}return n.index-e.index};const ue=function(n,e,r){e=e.length?(0,Xn.A)(e,(function(n){return(0,ln.A)(n)?function(e){return(0,ne.A)(e,1===n.length?n[0]:n)}:n})):[N.A];var t=-1;e=(0,Xn.A)(e,(0,te.A)(M.A));var o=(0,ee.A)(n,(function(n,r,o){return{criteria:(0,Xn.A)(e,(function(e){return e(n)})),index:++t,value:n}}));return re(o,(function(n,e){return ie(n,e,r)}))};var ae=r(24326),de=r(6832);const ce=(0,ae.A)((function(n,e){if(null==n)return[];var r=e.length;return r>1&&(0,de.A)(n,e[0],e[1])?e=[]:r>2&&(0,de.A)(e[0],e[1],e[2])&&(e=[e[0]]),ue(n,(0,Wn.A)(e,1),[])}));function fe(n,e){for(var r=0,t=1;t<e.length;++t)r+=se(n,e[t-1],e[t]);return r}function se(n,e,r){for(var o=Un(r,d.A(r,(function(n,e){return e}))),i=a.A(d.A(e,(function(e){return ce(d.A(n.outEdges(e),(function(e){return{pos:o[e.w],weight:n.edge(e).weight}})),"pos")}))),u=1;u<r.length;)u<<=1;var c=2*u-1;u-=1;var f=d.A(new Array(c),(function(){return 0})),s=0;return t.A(i.forEach((function(n){var e=n.pos+u;f[e]+=n.weight;for(var r=0;e>0;)e%2&&(r+=f[e+1]),f[e=e-1>>1]+=n.weight;s+=n.weight*r}))),s}function ve(n,e){var r={};return t.A(n,(function(n,e){var t=r[n.v]={indegree:0,in:[],out:[],vs:[n.v],i:e};C.A(n.barycenter)||(t.barycenter=n.barycenter,t.weight=n.weight)})),t.A(e.edges(),(function(n){var e=r[n.v],t=r[n.w];C.A(e)||C.A(t)||(t.indegree++,e.out.push(r[n.w]))})),function(n){var e=[];function r(n){return function(e){e.merged||(C.A(e.barycenter)||C.A(n.barycenter)||e.barycenter>=n.barycenter)&&function(n,e){var r=0,t=0;n.weight&&(r+=n.barycenter*n.weight,t+=n.weight);e.weight&&(r+=e.barycenter*e.weight,t+=e.weight);n.vs=e.vs.concat(n.vs),n.barycenter=r/t,n.weight=t,n.i=Math.min(e.i,n.i),e.merged=!0}(n,e)}}function o(e){return function(r){r.in.push(e),0==--r.indegree&&n.push(r)}}for(;n.length;){var i=n.pop();e.push(i),t.A(i.in.reverse(),r(i)),t.A(i.out,o(i))}return d.A(hn.A(e,(function(n){return!n.merged})),(function(n){return b.A(n,["vs","i","barycenter","weight"])}))}(hn.A(r,(function(n){return!n.indegree})))}function ge(n,e){var r,o=function(n,e){var r={lhs:[],rhs:[]};return t.A(n,(function(n){e(n)?r.lhs.push(n):r.rhs.push(n)})),r}(n,(function(n){return i.A(n,"barycenter")})),u=o.lhs,d=ce(o.rhs,(function(n){return-n.i})),c=[],f=0,s=0,v=0;u.sort((r=!!e,function(n,e){return n.barycenter<e.barycenter?-1:n.barycenter>e.barycenter?1:r?e.i-n.i:n.i-e.i})),v=he(c,d,v),t.A(u,(function(n){v+=n.vs.length,c.push(n.vs),f+=n.barycenter*n.weight,s+=n.weight,v=he(c,d,v)}));var g={vs:a.A(c)};return s&&(g.barycenter=f/s,g.weight=s),g}function he(n,e,r){for(var t;e.length&&(t=I(e)).i<=r;)e.pop(),n.push(t.vs),r++;return r}function le(n,e,r,o){var u=n.children(e),c=n.node(e),f=c?c.borderLeft:void 0,s=c?c.borderRight:void 0,v={};f&&(u=hn.A(u,(function(n){return n!==f&&n!==s})));var g=function(n,e){return d.A(e,(function(e){var r=n.inEdges(e);if(r.length){var t=zn.A(r,(function(e,r){var t=n.edge(r),o=n.node(r.v);return{sum:e.sum+t.weight*o.order,weight:e.weight+t.weight}}),{sum:0,weight:0});return{v:e,barycenter:t.sum/t.weight,weight:t.weight}}return{v:e}}))}(n,u);t.A(g,(function(e){if(n.children(e.v).length){var t=le(n,e.v,r,o);v[e.v]=t,i.A(t,"barycenter")&&(u=e,a=t,C.A(u.barycenter)?(u.barycenter=a.barycenter,u.weight=a.weight):(u.barycenter=(u.barycenter*u.weight+a.barycenter*a.weight)/(u.weight+a.weight),u.weight+=a.weight))}var u,a}));var h=ve(g,r);!function(n,e){t.A(n,(function(n){n.vs=a.A(n.vs.map((function(n){return e[n]?e[n].vs:n})))}))}(h,v);var l=ge(h,o);if(f&&(l.vs=a.A([f,l.vs,s]),n.predecessors(f).length)){var A=n.node(n.predecessors(f)[0]),p=n.node(n.predecessors(s)[0]);i.A(l,"barycenter")||(l.barycenter=0,l.weight=0),l.barycenter=(l.barycenter*l.weight+A.order+p.order)/(l.weight+2),l.weight+=2}return l}function Ae(n){var e=Y(n),r=pe(n,c.A(1,e+1),"inEdges"),o=pe(n,c.A(e-1,-1,-1),"outEdges"),u=function(n){var e={},r=hn.A(n.nodes(),(function(e){return!n.children(e).length})),o=_(d.A(r,(function(e){return n.node(e).rank}))),u=d.A(c.A(o+1),(function(){return[]})),a=ce(r,(function(e){return n.node(e).rank}));return t.A(a,(function r(o){if(!i.A(e,o)){e[o]=!0;var a=n.node(o);u[a.rank].push(o),t.A(n.successors(o),r)}})),u}(n);me(n,u);for(var a,f=Number.POSITIVE_INFINITY,s=0,v=0;v<4;++s,++v){we(s%2?r:o,s%4>=2);var g=fe(n,u=B(n));g<f&&(v=0,a=Zn(u),f=g)}me(n,a)}function pe(n,e,r){return d.A(e,(function(e){return Hn(n,e,r)}))}function we(n,e){var r=new f.T;t.A(n,(function(n){var o=n.graph().root,i=le(n,o,r,e);t.A(i.vs,(function(e,r){n.node(e).order=r})),function(n,e,r){var o,i={};t.A(r,(function(r){for(var t,u,a=n.parent(r);a;){if((t=n.parent(a))?(u=i[t],i[t]=a):(u=o,o=a),u&&u!==a)return void e.setEdge(u,a);a=t}}))}(n,r,i.vs)}))}function me(n,e){t.A(e,(function(e){t.A(e,(function(e,r){n.node(e).order=r}))}))}function be(n){var e=function(n){var e={},r=0;function o(i){var u=r;t.A(n.children(i),o),e[i]={low:u,lim:r++}}return t.A(n.children(),o),e}(n);t.A(n.graph().dummyChains,(function(r){for(var t=n.node(r),o=t.edgeObj,i=function(n,e,r,t){var o,i,u=[],a=[],d=Math.min(e[r].low,e[t].low),c=Math.max(e[r].lim,e[t].lim);o=r;do{o=n.parent(o),u.push(o)}while(o&&(e[o].low>d||c>e[o].lim));i=o,o=t;for(;(o=n.parent(o))!==i;)a.push(o);return{path:u.concat(a.reverse()),lca:i}}(n,e,o.v,o.w),u=i.path,a=i.lca,d=0,c=u[d],f=!0;r!==o.w;){if(t=n.node(r),f){for(;(c=u[d])!==a&&n.node(c).maxRank<t.rank;)d++;c===a&&(f=!1)}if(!f){for(;d<u.length-1&&n.node(c=u[d+1]).minRank<=t.rank;)d++;c=u[d]}n.setParent(r,c),r=n.successors(r)[0]}}))}var ye=r(99922);const xe=function(n,e){return n&&(0,R.A)(n,(0,ye.A)(e))};var ke=r(4574),Ee=r(55615);const Ne=function(n,e){return null==n?n:(0,ke.A)(n,(0,ye.A)(e),Ee.A)};function _e(n,e){var r={};return zn.A(e,(function(e,o){var i=0,u=0,a=e.length,d=I(o);return t.A(o,(function(e,c){var f=function(n,e){if(n.node(e).dummy)return gn(n.predecessors(e),(function(e){return n.node(e).dummy}))}(n,e),s=f?n.node(f).order:a;(f||e===d)&&(t.A(o.slice(u,c+1),(function(e){t.A(n.predecessors(e),(function(t){var o=n.node(t),u=o.order;!(u<i||s<u)||o.dummy&&n.node(e).dummy||Ie(r,t,e)}))})),u=c+1,i=s)})),o})),r}function Ie(n,e,r){if(e>r){var t=e;e=r,r=t}var o=n[e];o||(n[e]=o={}),o[r]=!0}function Te(n,e,r){if(e>r){var t=e;e=r,r=t}return i.A(n[e],r)}function Re(n,e,r,o,u){var a={},d=function(n,e,r,o){var u=new f.T,a=n.graph(),d=function(n,e,r){return function(t,o,u){var a,d=t.node(o),c=t.node(u),f=0;if(f+=d.width/2,i.A(d,"labelpos"))switch(d.labelpos.toLowerCase()){case"l":a=-d.width/2;break;case"r":a=d.width/2}if(a&&(f+=r?a:-a),a=0,f+=(d.dummy?e:n)/2,f+=(c.dummy?e:n)/2,f+=c.width/2,i.A(c,"labelpos"))switch(c.labelpos.toLowerCase()){case"l":a=c.width/2;break;case"r":a=-c.width/2}return a&&(f+=r?a:-a),a=0,f}}(a.nodesep,a.edgesep,o);return t.A(e,(function(e){var o;t.A(e,(function(e){var t=r[e];if(u.setNode(t),o){var i=r[o],a=u.edge(i,t);u.setEdge(i,t,Math.max(d(n,e,o),a||0))}o=e}))})),u}(n,e,r,u),c=u?"borderLeft":"borderRight";function s(n,e){for(var r=d.nodes(),t=r.pop(),o={};t;)o[t]?n(t):(o[t]=!0,r.push(t),r=r.concat(e(t))),t=r.pop()}return s((function(n){a[n]=d.inEdges(n).reduce((function(n,e){return Math.max(n,a[e.v]+d.edge(e))}),0)}),d.predecessors.bind(d)),s((function(e){var r=d.outEdges(e).reduce((function(n,e){return Math.min(n,a[e.w]-d.edge(e))}),Number.POSITIVE_INFINITY),t=n.node(e);r!==Number.POSITIVE_INFINITY&&t.borderType!==c&&(a[e]=Math.max(a[e],r))}),d.successors.bind(d)),t.A(o,(function(n){a[n]=a[r[n]]})),a}function Me(n){var e,r=B(n),o=m.A(_e(n,r),function(n,e){var r={};function o(e,o,i,u,a){var d;t.A(c.A(o,i),(function(o){d=e[o],n.node(d).dummy&&t.A(n.predecessors(d),(function(e){var t=n.node(e);t.dummy&&(t.order<u||t.order>a)&&Ie(r,e,d)}))}))}return zn.A(e,(function(e,r){var i,u=-1,a=0;return t.A(r,(function(t,d){if("border"===n.node(t).dummy){var c=n.predecessors(t);c.length&&(i=n.node(c[0]).order,o(r,a,d,u,i),a=d,u=i)}o(r,a,r.length,i,e.length)})),r})),r}(n,r)),i={};t.A(["u","d"],(function(u){e="u"===u?r:Yn.A(r).reverse(),t.A(["l","r"],(function(r){"r"===r&&(e=d.A(e,(function(n){return Yn.A(n).reverse()})));var a=("u"===u?n.predecessors:n.successors).bind(n),c=function(n,e,r,o){var i={},u={},a={};return t.A(e,(function(n){t.A(n,(function(n,e){i[n]=n,u[n]=n,a[n]=e}))})),t.A(e,(function(n){var e=-1;t.A(n,(function(n){var t=o(n);if(t.length){t=ce(t,(function(n){return a[n]}));for(var d=(t.length-1)/2,c=Math.floor(d),f=Math.ceil(d);c<=f;++c){var s=t[c];u[n]===n&&e<a[s]&&!Te(r,n,s)&&(u[s]=n,u[n]=i[n]=i[s],e=a[s])}}}))})),{root:i,align:u}}(0,e,o,a),f=Re(n,e,c.root,c.align,"r"===r);"r"===r&&(f=L(f,(function(n){return-n}))),i[u+r]=f}))}));var u=function(n,e){return W(Yn.A(e),(function(e){var r=Number.NEGATIVE_INFINITY,t=Number.POSITIVE_INFINITY;return Ne(e,(function(e,o){var i=function(n,e){return n.node(e).width}(n,o)/2;r=Math.max(e+i,r),t=Math.min(e-i,t)})),r-t}))}(n,i);return function(n,e){var r=Yn.A(e),o=P(r),i=_(r);t.A(["u","d"],(function(r){t.A(["l","r"],(function(t){var u,a=r+t,d=n[a];if(d!==e){var c=Yn.A(d);(u="l"===t?o-P(c):i-_(c))&&(n[a]=L(d,(function(n){return n+u})))}}))}))}(i,u),function(n,e){return L(n.ul,(function(r,t){if(e)return n[e.toLowerCase()][t];var o=ce(d.A(n,t));return(o[1]+o[2])/2}))}(i,n.graph().align)}function Le(n){(function(n){var e=B(n),r=n.graph().ranksep,o=0;t.A(e,(function(e){var i=_(d.A(e,(function(e){return n.node(e).height})));t.A(e,(function(e){n.node(e).y=o+i/2})),o+=i+r}))})(n=G(n)),xe(Me(n),(function(e,r){n.node(r).x=e}))}function Ce(n,e){var r=e&&e.debugTiming?z:D;r("layout",(function(){var e=r("  buildLayoutGraph",(function(){return function(n){var e=new f.T({multigraph:!0,compound:!0}),r=Ye(n.graph());return e.setGraph(m.A({},Pe,qe(r,Oe),b.A(r,Se))),t.A(n.nodes(),(function(r){var t=Ye(n.node(r));e.setNode(r,y.A(qe(t,je),Fe)),e.setParent(r,n.parent(r))})),t.A(n.edges(),(function(r){var t=Ye(n.edge(r));e.setEdge(r,m.A({},Ve,qe(t,Ge),b.A(t,Be)))})),e}(n)}));r("  runLayout",(function(){!function(n,e){e("    makeSpaceForEdgeLabels",(function(){!function(n){var e=n.graph();e.ranksep/=2,t.A(n.edges(),(function(r){var t=n.edge(r);t.minlen*=2,"c"!==t.labelpos.toLowerCase()&&("TB"===e.rankdir||"BT"===e.rankdir?t.width+=t.labeloffset:t.height+=t.labeloffset)}))}(n)})),e("    removeSelfEdges",(function(){!function(n){t.A(n.edges(),(function(e){if(e.v===e.w){var r=n.node(e.v);r.selfEdges||(r.selfEdges=[]),r.selfEdges.push({e:e,label:n.edge(e)}),n.removeEdge(e)}}))}(n)})),e("    acyclic",(function(){w(n)})),e("    nestingGraph.run",(function(){Dn(n)})),e("    rank",(function(){Vn(G(n))})),e("    injectEdgeLabelProxies",(function(){!function(n){t.A(n.edges(),(function(e){var r=n.edge(e);if(r.width&&r.height){var t=n.node(e.v),o={rank:(n.node(e.w).rank-t.rank)/2+t.rank,e:e};F(n,"edge-proxy",o,"_ep")}}))}(n)})),e("    removeEmptyRanks",(function(){!function(n){var e=P(d.A(n.nodes(),(function(e){return n.node(e).rank}))),r=[];t.A(n.nodes(),(function(t){var o=n.node(t).rank-e;r[o]||(r[o]=[]),r[o].push(t)}));var o=0,i=n.graph().nodeRankFactor;t.A(r,(function(e,r){C.A(e)&&r%i!=0?--o:o&&t.A(e,(function(e){n.node(e).rank+=o}))}))}(n)})),e("    nestingGraph.cleanup",(function(){!function(n){var e=n.graph();n.removeNode(e.nestingRoot),delete e.nestingRoot,t.A(n.edges(),(function(e){n.edge(e).nestingEdge&&n.removeEdge(e)}))}(n)})),e("    normalizeRanks",(function(){!function(n){var e=P(d.A(n.nodes(),(function(e){return n.node(e).rank})));t.A(n.nodes(),(function(r){var t=n.node(r);i.A(t,"rank")&&(t.rank-=e)}))}(n)})),e("    assignRankMinMax",(function(){!function(n){var e=0;t.A(n.nodes(),(function(r){var t=n.node(r);t.borderTop&&(t.minRank=n.node(t.borderTop).rank,t.maxRank=n.node(t.borderBottom).rank,e=_(e,t.maxRank))})),n.graph().maxRank=e}(n)})),e("    removeEdgeLabelProxies",(function(){!function(n){t.A(n.nodes(),(function(e){var r=n.node(e);"edge-proxy"===r.dummy&&(n.edge(r.e).labelRank=r.rank,n.removeNode(e))}))}(n)})),e("    normalize.run",(function(){U(n)})),e("    parentDummyChains",(function(){be(n)})),e("    addBorderSegments",(function(){!function(n){t.A(n.children(),(function e(r){var o=n.children(r),u=n.node(r);if(o.length&&t.A(o,e),i.A(u,"minRank")){u.borderLeft=[],u.borderRight=[];for(var a=u.minRank,d=u.maxRank+1;a<d;++a)$(n,"borderLeft","_bl",r,u,a),$(n,"borderRight","_br",r,u,a)}}))}(n)})),e("    order",(function(){Ae(n)})),e("    insertSelfEdges",(function(){!function(n){var e=B(n);t.A(e,(function(e){var r=0;t.A(e,(function(e,o){var i=n.node(e);i.order=o+r,t.A(i.selfEdges,(function(e){F(n,"selfedge",{width:e.label.width,height:e.label.height,rank:i.rank,order:o+ ++r,e:e.e,label:e.label},"_se")})),delete i.selfEdges}))}))}(n)})),e("    adjustCoordinateSystem",(function(){!function(n){var e=n.graph().rankdir.toLowerCase();"lr"!==e&&"rl"!==e||Z(n)}(n)})),e("    position",(function(){Le(n)})),e("    positionSelfEdges",(function(){!function(n){t.A(n.nodes(),(function(e){var r=n.node(e);if("selfedge"===r.dummy){var t=n.node(r.e.v),o=t.x+t.width/2,i=t.y,u=r.x-o,a=t.height/2;n.setEdge(r.e,r.label),n.removeNode(e),r.label.points=[{x:o+2*u/3,y:i-a},{x:o+5*u/6,y:i-a},{x:o+u,y:i},{x:o+5*u/6,y:i+a},{x:o+2*u/3,y:i+a}],r.label.x=r.x,r.label.y=r.y}}))}(n)})),e("    removeBorderNodes",(function(){!function(n){t.A(n.nodes(),(function(e){if(n.children(e).length){var r=n.node(e),t=n.node(r.borderTop),o=n.node(r.borderBottom),i=n.node(I(r.borderLeft)),u=n.node(I(r.borderRight));r.width=Math.abs(u.x-i.x),r.height=Math.abs(o.y-t.y),r.x=i.x+r.width/2,r.y=t.y+r.height/2}})),t.A(n.nodes(),(function(e){"border"===n.node(e).dummy&&n.removeNode(e)}))}(n)})),e("    normalize.undo",(function(){!function(n){t.A(n.graph().dummyChains,(function(e){var r,t=n.node(e),o=t.edgeLabel;for(n.setEdge(t.edgeObj,o);t.dummy;)r=n.successors(e)[0],n.removeNode(e),o.points.push({x:t.x,y:t.y}),"edge-label"===t.dummy&&(o.x=t.x,o.y=t.y,o.width=t.width,o.height=t.height),e=r,t=n.node(e)}))}(n)})),e("    fixupEdgeLabelCoords",(function(){!function(n){t.A(n.edges(),(function(e){var r=n.edge(e);if(i.A(r,"x"))switch("l"!==r.labelpos&&"r"!==r.labelpos||(r.width-=r.labeloffset),r.labelpos){case"l":r.x-=r.width/2+r.labeloffset;break;case"r":r.x+=r.width/2+r.labeloffset}}))}(n)})),e("    undoCoordinateSystem",(function(){J(n)})),e("    translateGraph",(function(){!function(n){var e=Number.POSITIVE_INFINITY,r=0,o=Number.POSITIVE_INFINITY,u=0,a=n.graph(),d=a.marginx||0,c=a.marginy||0;function f(n){var t=n.x,i=n.y,a=n.width,d=n.height;e=Math.min(e,t-a/2),r=Math.max(r,t+a/2),o=Math.min(o,i-d/2),u=Math.max(u,i+d/2)}t.A(n.nodes(),(function(e){f(n.node(e))})),t.A(n.edges(),(function(e){var r=n.edge(e);i.A(r,"x")&&f(r)})),e-=d,o-=c,t.A(n.nodes(),(function(r){var t=n.node(r);t.x-=e,t.y-=o})),t.A(n.edges(),(function(r){var u=n.edge(r);t.A(u.points,(function(n){n.x-=e,n.y-=o})),i.A(u,"x")&&(u.x-=e),i.A(u,"y")&&(u.y-=o)})),a.width=r-e+d,a.height=u-o+c}(n)})),e("    assignNodeIntersects",(function(){!function(n){t.A(n.edges(),(function(e){var r,t,o=n.edge(e),i=n.node(e.v),u=n.node(e.w);o.points?(r=o.points[0],t=o.points[o.points.length-1]):(o.points=[],r=u,t=i),o.points.unshift(V(i,r)),o.points.push(V(u,t))}))}(n)})),e("    reversePoints",(function(){!function(n){t.A(n.edges(),(function(e){var r=n.edge(e);r.reversed&&r.points.reverse()}))}(n)})),e("    acyclic.undo",(function(){!function(n){t.A(n.edges(),(function(e){var r=n.edge(e);if(r.reversed){n.removeEdge(e);var t=r.forwardName;delete r.reversed,delete r.forwardName,n.setEdge(e.w,e.v,r,t)}}))}(n)}))}(e,r)})),r("  updateInputGraph",(function(){!function(n,e){t.A(n.nodes(),(function(r){var t=n.node(r),o=e.node(r);t&&(t.x=o.x,t.y=o.y,e.children(r).length&&(t.width=o.width,t.height=o.height))})),t.A(n.edges(),(function(r){var t=n.edge(r),o=e.edge(r);t.points=o.points,i.A(o,"x")&&(t.x=o.x,t.y=o.y)})),n.graph().width=e.graph().width,n.graph().height=e.graph().height}(n,e)}))}))}var Oe=["nodesep","edgesep","ranksep","marginx","marginy"],Pe={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},Se=["acyclicer","ranker","rankdir","align"],je=["width","height"],Fe={width:0,height:0},Ge=["minlen","weight","width","height","labeloffset"],Ve={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},Be=["labelpos"];function qe(n,e){return L(b.A(n,e),Number)}function Ye(n){var e={};return t.A(n,(function(n,r){e[r.toLowerCase()]=n})),e}},52568:(n,e,r)=>{r.d(e,{A:()=>i});var t=r(6240),o=r(38446);const i=function(n,e){var r=-1,i=(0,o.A)(n)?Array(n.length):[];return(0,t.A)(n,(function(n,t,o){i[++r]=e(n,t,o)})),i}},23068:(n,e,r)=>{r.d(e,{A:()=>c});var t=r(24326),o=r(66984),i=r(6832),u=r(55615),a=Object.prototype,d=a.hasOwnProperty;const c=(0,t.A)((function(n,e){n=Object(n);var r=-1,t=e.length,c=t>2?e[2]:void 0;for(c&&(0,i.A)(e[0],e[1],c)&&(t=1);++r<t;)for(var f=e[r],s=(0,u.A)(f),v=-1,g=s.length;++v<g;){var h=s[v],l=n[h];(void 0===l||(0,o.A)(l,a[h])&&!d.call(n,h))&&(n[h]=f[h])}return n}))},34098:(n,e,r)=>{r.d(e,{A:()=>o});var t=r(13588);const o=function(n){return(null==n?0:n.length)?(0,t.A)(n,1):[]}},74722:(n,e,r)=>{r.d(e,{A:()=>a});var t=r(45572),o=r(49574),i=r(52568),u=r(92049);const a=function(n,e){return((0,u.A)(n)?t.A:i.A)(n,(0,o.A)(e,3))}},81942:(n,e,r)=>{r.d(e,{A:()=>A});var t=r(66318),o=r(52851),i=r(7819),u=r(25353),a=r(23149),d=r(30901);const c=function(n,e,r,t){if(!(0,a.A)(n))return n;for(var c=-1,f=(e=(0,i.A)(e,n)).length,s=f-1,v=n;null!=v&&++c<f;){var g=(0,d.A)(e[c]),h=r;if("__proto__"===g||"constructor"===g||"prototype"===g)return n;if(c!=s){var l=v[g];void 0===(h=t?t(l,g,v):void 0)&&(h=(0,a.A)(l)?l:(0,u.A)(e[c+1])?[]:{})}(0,o.A)(v,g,h),v=v[g]}return n};const f=function(n,e,r){for(var o=-1,u=e.length,a={};++o<u;){var d=e[o],f=(0,t.A)(n,d);r(f,d)&&c(a,(0,i.A)(d,n),f)}return a};var s=r(39188);const v=function(n,e){return f(n,e,(function(e,r){return(0,s.A)(n,r)}))};var g=r(34098),h=r(76875),l=r(67525);const A=function(n){return(0,l.A)((0,h.A)(n,void 0,g.A),n+"")}((function(n,e){return null==n?{}:v(n,e)}))},91395:(n,e,r)=>{r.d(e,{A:()=>d});var t=Math.ceil,o=Math.max;const i=function(n,e,r,i){for(var u=-1,a=o(t((e-n)/(r||1)),0),d=Array(a);a--;)d[i?a:++u]=n,n+=r;return d};var u=r(6832),a=r(74342);const d=function(n){return function(e,r,t){return t&&"number"!=typeof t&&(0,u.A)(e,r,t)&&(r=t=void 0),e=(0,a.A)(e),void 0===r?(r=e,e=0):r=(0,a.A)(r),t=void 0===t?e<r?1:-1:(0,a.A)(t),i(e,r,t,n)}}()},74342:(n,e,r)=>{r.d(e,{A:()=>l});var t=/\s/;const o=function(n){for(var e=n.length;e--&&t.test(n.charAt(e)););return e};var i=/^\s+/;const u=function(n){return n?n.slice(0,o(n)+1).replace(i,""):n};var a=r(23149),d=r(61882),c=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,s=/^0o[0-7]+$/i,v=parseInt;const g=function(n){if("number"==typeof n)return n;if((0,d.A)(n))return NaN;if((0,a.A)(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=(0,a.A)(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=u(n);var r=f.test(n);return r||s.test(n)?v(n.slice(2),r?2:8):c.test(n)?NaN:+n};var h=1/0;const l=function(n){return n?(n=g(n))===h||n===-1/0?17976931348623157e292*(n<0?-1:1):n==n?n:0:0===n?n:0}},5664:(n,e,r)=>{r.d(e,{A:()=>i});var t=r(28894),o=0;const i=function(n){var e=++o;return(0,t.A)(n)+e}}}]);