/** Chunk was on web.js **/
/** chunk id: 557818, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk184105 = require("./184105.js");

function l(e) {
  let {
    readOnly: t,
    disabled: n,
    fullWidth: i = false,
    children: l,
    validation: c,
    className: u,
    helperText: d,
    characterCount: f,
    characterCountMaxLength: _,
    successMessage: p
  } = e, h = null == c ? true : c.hasError, m = <div />, g = null != f;
  return null != p && "" !== p ? (g = true, m = <div className={s.statusMessageContainer}>{<a.owK size={"xs"} color={a.TVs.colors.TEXT_FEEDBACK_POSITIVE} />}{<a.Text variant={"text-xs/normal"} color={"text-feedback-positive"}>{p}</a.Text>}</div>) : h ? (g = true, m = <div className={s.statusMessageContainer}>{<a.Mgn size={"xs"} color={a.TVs.colors.TEXT_FEEDBACK_CRITICAL} />}{<a.Text variant={"text-xs/normal"} color={"text-feedback-critical"}>{null == c ? true : c.errorMessage}</a.Text>}</div>) : null != d && (g = true, m = <a.Text variant={"text-xs/normal"} color={"text-secondary"}>{d}</a.Text>), <div className={s.container} data-full-width={i}>{<div className={o()(s.wrapper, u)} data-error={h} data-read-only={t} data-disabled={n}>{l}</div>}{g && <div className={s.helperTextContainer}>{m}{null != f && <a.Text variant={"text-xs/normal"} color={"text-secondary"} tabularNumbers={true}>{f}{null != _ && " / ".concat(_)}</a.Text>}</div>}</div>
}