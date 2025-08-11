/** Chunk was on 90220 **/
/** chunk id: 418225, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  default: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk935369 = require("./935369.js"),
  Chunk53365 = require("./53365.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk374762 = require("./374762.js"),
  Chunk490962 = require("./490962.js");

function u(t) {
  let {
    header: e,
    body: s
  } = t;
  return <div className={c.bulletItem}>{<img alt={""} className={c.bulletImage} src={d} />}{<div>{<n.Text variant={"text-sm/semibold"} color={"text-default"}>{e}</n.Text>}{<n.LZC size={4} />}{<n.Text variant={"text-sm/normal"} color={"text-muted"}>{s}</n.Text>}</div>}</div>
}

function x(t) {
  let {
    guildId: e,
    demonetized: s,
    transitionState: c,
    onClose: d
  } = t, [x, {
    loading: m,
    error: h
  }] = (0, i.Z)(s ? a.$J : a.hY), p = async () => {
    try {
      let t = await x(e);
      null != t && (null == d || d())
    } catch (t) {}
  };
  return <l.Modal size={"md"} transitionState={c} actions={[{
      variant: "secondary",
      onClick: d,
      text: o.intl.string(o.t.Jj8nUF)
    }, {
      variant: "primary",
      loading: m,
      onClick: p,
      text: o.intl.string(o.t["pC/ozM"])
    }]} title={o.intl.string(o.t.TP4GSk)} onClose={d} preview={(0, r.jsxs)(r.Fragment, {
      children: [null == h ? null : (0, r.jsxs)(n.Text, {
        variant: "text-xs/normal",
        color: "status-danger",
        children: ["Error: ", h.message]
      }), (0, r.jsx)(n.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: o.intl.format(o.t["+oNl6+"], {
          termsURL: "https://support.discord.com/hc/en-us/articles/5330075836311-Creator-Pilot-Terms"
        })
      })]
    })} subtitle={o.intl.format(o.t.c0IsOD, {
      termsURL: "https://support.discord.com/hc/en-us/articles/5330075836311-Creator-Pilot-Terms"
    })}><n.Kqy gap={16}>{<u header={o.intl.string(o.t.UzDaWF)} body={o.intl.string(o.t.IDk8Fx)} />}{<u header={o.intl.string(o.t["36/RiY"])} body={o.intl.string(o.t.CBzNtr)} />}</n.Kqy></l.Modal>
}