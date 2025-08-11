/** Chunk was on web.js **/
/** chunk id: 596739, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => c
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk392819 = require("./392819.js"),
  Chunk560580 = require("./560580.js");

function c(e) {
  let {
    header: t,
    description: n,
    onDismiss: c,
    buttons: u,
    dismissible: d = true
  } = e, f = i.useCallback(() => {
    null == c || c()
  }, [c]);
  return <div className={s.safetyBanner}>{<div className={s.shieldAndHeading}>{<img className={s.safetyShieldIcon} src={l} alt={""} />}{<div>{<o.X6q variant={"heading-md/semibold"} color={"text-primary"}>{t}</o.X6q>}{<o.Text variant={"text-sm/normal"} color={"text-primary"}>{n}</o.Text>}</div>}</div>}{<div className={s.buttons}>{null == u ? true : u.map((e, t) => {
        var n;
        return (0, r.jsx)(o.zxk, {
          text: e.text,
          variant: null != (n = e.variant) ? n : "secondary",
          onClick: e.onClick,
          size: "sm"
        }, t)
      })}</div>}{d ? <o.P3F className={s.closeButton} onClick={f} role={"button"} aria-label={a.intl.string(a.t.WAI6xs)}><o.Dio size={"md"} color={"currentColor"} className={s.closeButton} /></o.P3F> : null}</div>
}