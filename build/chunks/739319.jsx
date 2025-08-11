/** Chunk was on 54844 **/
/** chunk id: 739319, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk454585 = require("./454585.js"),
  Chunk572004 = require("./572004.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk163124 = require("./163124.js");

function m(e) {
  let {
    element: {
      data: {
        title: t,
        body: n,
        sms: i,
        is_localized: m
      }
    }
  } = e, [p, g] = l.useState(false), x = l.useRef(o.Z.reactParserFor(o.Z.defaultRules));
  return m ? <div className={u.container}>{<s.X6q variant={"heading-sm/semibold"} color={"header-secondary"} className={u.header}>{t}</s.X6q>}{<s.Text variant={"text-sm/normal"} className={u.bodyText}>{x.current(n)}</s.Text>}{<div><div className={a()(u.smsNumberContainer, {
          [u.copied]: p
        })}>{<s.Text variant={"text-md/normal"} selectable={true} className={u.smsNumberText}>{i}</s.Text>}{<div data-button-hoisted-classname-wrapper={true} className={u.__invalid_trailingButton}><s.zxk variant={"secondary"} size={"sm"} text={p ? d.intl.string(d.t["t5VZ8/"]) : d.intl.string(d.t.OpuAlJ)} onClick={() => {
              (0, c.JG)(i, () => g(true))
            }} /></div>}</div></div>}</div> : null
}