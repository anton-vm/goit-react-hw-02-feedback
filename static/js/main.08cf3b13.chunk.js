(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),o=a.n(r),l=(a(13),a(3)),u=a(4),i=a(5),s=a(6),d=a(7),m=function(e){var t=e.good,a=e.neutral,n=e.bad,r=e.total,o=e.positive;return c.a.createElement("div",null,c.a.createElement("p",null,"Good ",t),c.a.createElement("p",null,"Neutral ",a),c.a.createElement("p",null,"Bad ",n),c.a.createElement("p",null,"Total ",r),c.a.createElement("p",null,"Pisitive ",o," %"))},b=function(e){var t=e.title,a=e.children;return c.a.createElement("div",null,c.a.createElement("h2",null,t),a)},v=function(e){var t=e.options,a=e.onLeaveFeedback;return c.a.createElement("div",{className:"buttons"},t.map((function(e){return c.a.createElement("button",{className:"btn",onClick:function(){return a(e)}},e)})))},p=function(e){var t=e.message;return c.a.createElement("p",null,t)},E=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(l.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return(e.state.good/e.countTotalFeedback()*100).toFixed(2)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,r=Object.keys(this.state),o=this.onLeaveFeedback,l=this.countTotalFeedback(),u=this.countPositiveFeedbackPercentage();return c.a.createElement(c.a.Fragment,null,c.a.createElement(b,{title:"Please leave feedback"},c.a.createElement(v,{options:r,onLeaveFeedback:o})),c.a.createElement(b,{title:"Statistic"},l>0?c.a.createElement(m,{good:t,neutral:a,bad:n,total:l,positive:u}):c.a.createElement(p,{message:"No feedback given"})))}}]),a}(n.Component);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.08cf3b13.chunk.js.map