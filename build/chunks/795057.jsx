/** Chunk was on 37082 **/
/** chunk id: 795057, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => u,
  y3: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js");
require("./509212.js"), require("./373370.js"), require("./566078.js"), require("./388032.jsx");
var Chunk141572 = require("./141572.js");

function l(e) {
  let {
    children: t,
    isComplete: n,
    hasNextStep: s
  } = e;
  return <li className={o()(i.stepWrapper, {
      [i.stepWrapperComplete]: n
    }, {
      [i.stepWrapperWithNextStep]: s
    })}>{<div className={i.stepIndicator}>{<div className={i.stepIconWrapper}>{n && (0, r.jsx)(a.sV5, {
          className: i.stepIcon,
          color: a.TVs.colors.WHITE
        })}</div>}{s && <div className={i.stepConnector} />}</div>}{<div className={i.stepContent}>{t}</div>}</li>
}

function c(e) {
  let {
    children: t
  } = e;
  return <a.Text color={"text-muted"} variant={"text-xs/medium"}>{t}</a.Text>
}
let u = function(e) {
  let {
    children: t,
    heading: n,
    steps: s
  } = e;
  return <div className={i.wrapper}>{<div className={i.headingWrapper}><a.X6q className={i.heading} color={"header-primary"} variant={"text-xs/semibold"}>{n}</a.X6q></div>}{<div className={i.stepsWrapper}><ul>{s.map((e, t) => (0, r.jsx)(l, {
          isComplete: e.isComplete,
          hasNextStep: t < s.length - 1,
          children: e.renderContent()
        }, t))}</ul></div>}{t}</div>
}