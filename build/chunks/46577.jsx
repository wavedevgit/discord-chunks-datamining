/** Chunk was on 25443 **/
/** chunk id: 46577, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => w
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk410575 = require("./410575.js"),
  Chunk881052 = require("./881052.js"),
  Chunk299206 = require("./299206.js"),
  Chunk430824 = require("./430824.js"),
  Chunk236413 = require("./236413.js"),
  Chunk727072 = require("./727072.js"),
  Chunk36459 = require("./36459.js"),
  Chunk65912 = require("./65912.js"),
  Chunk572456 = require("./572456.js"),
  Chunk273504 = require("./273504.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js");

function w(t) {
  let {
    rule: e,
    analyticsContext: r,
    onSelect: w
  } = t, x = (0, p.Vb)(e), v = function(t) {
    let {
      editingRule: e,
      setEditingRule: r
    } = (0, y.V)();
    return <c.sNh id={"edit-automod-rule"} label={m.intl.string(m.t.uQq6Pz)} action={() => {
        r(t)
      }} disabled={null != e} />
  }(e), P = function(t) {
    let {
      setEditingRule: e
    } = (0, y.V)(), [r, a] = i.useState(false), {
      removeRule: s
    } = (0, f.pH)(t.guildId), d = (0, l.e7)([b.Z], () => b.Z.getGuild(t.guildId)), p = async () => {
      if (!r && await (0, j.gK)(t.name)) {
        a(true);
        try {
          await (0, g.mm)(t.id, t.guildId), e(null), s(t.id, t.guildId)
        } catch (e) {
          var n;
          let t = new u.Hx(e);
          (0, c.showToast)((0, c.createToast)(null != (n = t.getAnyErrorMessage()) ? n : m.intl.string(m.t.fEptJC), c.ToastType.FAILURE))
        } finally {
          a(false)
        }
      }
    }, w = t.triggerType === O.fX.MENTION_SPAM && (null == d ? true : d.features) != null && d.features.has(h.oNc.COMMUNITY);
    return <c.sNh id={"delete-automod-rule"} label={m.intl.string(m.t["92m/09"])} action={w ? () => {
        (0, c.h7j)(t => {
          var e, r;
          return (0, n.jsx)(c.ConfirmModal, (e = function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = null != arguments[e] ? arguments[e] : {},
                n = Object.keys(r);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable
              }))), n.forEach(function(e) {
                var n;
                n = r[e], e in t ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : t[e] = n
              })
            }
            return t
          }({
            header: m.intl.string(m.t.MmpqMD),
            confirmText: m.intl.string(m.t.BddRzc),
            confirmButtonColor: o.zx.Colors.BRAND
          }, t), r = r = {
            children: (0, n.jsx)(c.Text, {
              variant: "text-md/normal",
              children: m.intl.string(m.t.XMdBLy)
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(t);
              r.push.apply(r, n)
            }
            return r
          })(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }), e))
        })
      } : p} />
  }(e), T = (0, d.Z)({
    id: e.id,
    label: m.intl.string(m.t.F64hjo)
  });
  return <s.Z context={r} object={h.qAy.CONTEXT_MENU}><c.v2r navId={"automod-rule-context"} onClose={a.Zy} aria-label={m.intl.string(m.t.uT36Sk)} onSelect={w}>{<c.kSQ>{v}{x && P}</c.kSQ>}{x && <c.kSQ>{T}</c.kSQ>}</c.v2r></s.Z>
}