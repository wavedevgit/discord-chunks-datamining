/** Chunk was on 25443 **/
/** chunk id: 46577, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk885387 = require("./885387.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk881052 = require("./881052.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk236413 = require("./236413.js"),
  Chunk727072 = require("./727072.js"),
  Chunk36459 = require("./36459.js"),
  Chunk65912 = require("./65912.js"),
  Chunk572456 = require("./572456.jsx"),
  Chunk273504 = require("./273504.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function m(t) {
  let {
    rule: e,
    analyticsContext: i,
    onSelect: m
  } = t, y = (0, h.Vb)(e), I = function(t) {
    let {
      editingRule: e,
      setEditingRule: i
    } = (0, b.V)();
    return (0, l.jsx)(r.sNh, {
      id: "edit-automod-rule",
      label: j.intl.string(j.t.uQq6Px),
      action: () => {
        i(t)
      },
      disabled: null != e
    })
  }(e), w = function(t) {
    let {
      setEditingRule: e
    } = (0, b.V)(), [i, d] = n.useState(false), {
      removeRule: u
    } = (0, p.pH)(t.guildId), c = (0, s.e7)([g.Z], () => g.Z.getGuild(t.guildId)), h = async () => {
      if (!i && await (0, x.gK)(t.name)) {
        d(true);
        try {
          await (0, f.mm)(t.id, t.guildId), e(null), u(t.id, t.guildId)
        } catch (e) {
          var l;
          let t = new o.Hx(e);
          (0, r.showToast)((0, r.createToast)(null != (l = t.getAnyErrorMessage()) ? l : j.intl.string(j.t.fEptJP), r.ToastType.FAILURE))
        } finally {
          d(false)
        }
      }
    }, m = t.triggerType === T.fX.MENTION_SPAM && (null == c ? true : c.features) != null && c.features.has(M.GuildFeatures.COMMUNITY);
    return (0, l.jsx)(r.sNh, {
      id: "delete-automod-rule",
      label: j.intl.string(j.t["92m/01"]),
      action: m ? () => {
        (0, a.Z)({
          title: j.intl.string(j.t.MmpqMC),
          subtitle: j.intl.string(j.t.XMdBLw)
        })
      } : h
    })
  }(e), N = (0, c.Z)({
    id: e.id,
    label: j.intl.string(j.t.F64hjn)
  });
  return (0, l.jsx)(u.Z, {
    context: i,
    object: M.qAy.CONTEXT_MENU,
    children: (0, l.jsxs)(r.v2r, {
      navId: "automod-rule-context",
      onClose: d.Zy,
      "aria-label": j.intl.string(j.t.uT36So),
      onSelect: m,
      children: [(0, l.jsxs)(r.kSQ, {
        children: [I, y && w]
      }), y && (0, l.jsx)(r.kSQ, {
        children: N
      })]
    })
  })
}