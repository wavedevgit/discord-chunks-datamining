/** Chunk was on 77803 **/
/** chunk id: 200207, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => d
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk708816 = require("./708816.js"),
  Chunk790472 = require("./790472.js"),
  Chunk777207 = require("./777207.js"),
  Chunk559554 = require("./559554.js"),
  Chunk820468 = require("./820468.js");

function d(e) {
  let {
    title: t,
    description: n,
    headerImage: i,
    onDetails: d,
    onPurchase: p,
    PurchaseButton: b,
    GiftButton: m,
    availabilityLabel: f
  } = e;
  return <o.tE><div className={l()(u.wrapper, c.hoverCard)} tabIndex={0} onClick={() => {
        null != d ? d() : null != p && p()
      }} onKeyUp={e => {
        "Enter" === e.key && (e.stopPropagation(), e.preventDefault(), null != d ? d() : null != p && p())
      }}>{<div className={u.cardHeaderImg} style={null != i ? {
          backgroundImage: null != i ? "url(".concat(i.toString(), ")") : true
        } : true}>{null == i && (0, r.jsx)(s.P, {
          color: "white",
          size: "custom",
          height: 80,
          width: 80
        })}</div>}{<div className={u.details}>{<a.x color={"header-primary"} variant={"text-md/semibold"}>{t}</a.x>}{null != n && <a.x className={u.description} color={"text-muted"} variant={"text-sm/normal"}>{n}</a.x>}</div>}{(null != b || null != m) && <div className={u.footer}>{null != b && <a.x color={"interactive-normal"} variant={"text-sm/normal"}>{f}</a.x>}{<div className={u.buttonGroup}>{null != b && <b onClick={e => {
              e.stopPropagation(), null == p || p()
            }} />}{null != m && <m />}</div>}</div>}</div></o.tE>
}