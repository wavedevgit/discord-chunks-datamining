/** Chunk was on 52106 **/
/** chunk id: 345585, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk139033 = require("./139033.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk820284 = require("./820284.jsx"),
  Chunk198982 = require("./198982.js"),
  Chunk50268 = require("./50268.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk627794 = require("./627794.js"),
  Chunk928348 = require("./928348.js"),
  Chunk137207 = require("./137207.js"),
  Chunk268749 = require("./268749.js"),
  Chunk264349 = require("./264349.jsx"),
  Chunk411335 = require("./411335.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function j(t) {
  let {
    rule: e,
    analyticsContext: i,
    onSelect: j
  } = t, A = (0, h.wC)(e), I = function(t) {
    let {
      editingRule: e,
      setEditingRule: i
    } = (0, T.U)();
    return (0, l.jsx)(s.Drp, {
      id: "edit-automod-rule",
      label: M.intl.string(M.t.uQq6Px),
      action: () => {
        i(t)
      },
      disabled: null != e
    })
  }(e), C = function(t) {
    let {
      setEditingRule: e
    } = (0, T.U)(), [i, d] = n.useState(false), {
      removeRule: u
    } = (0, p.wP)(t.guildId), c = (0, r.bG)([g.A], () => g.A.getGuild(t.guildId)), h = async () => {
      if (!i && await (0, f.ih)(t.name)) {
        d(true);
        try {
          await (0, b.nV)(t.id, t.guildId), e(null), u(t.id, t.guildId)
        } catch (e) {
          var l;
          let t = new o.LG(e);
          (0, s.showToast)((0, s.createToast)(null != (l = t.getAnyErrorMessage()) ? l : M.intl.string(M.t.fEptJP), s.ToastType.FAILURE))
        } finally {
          d(false)
        }
      }
    }, j = t.triggerType === w.uh.MENTION_SPAM && (null == c ? true : c.features) != null && c.features.has(x.GuildFeatures.COMMUNITY);
    return (0, l.jsx)(s.Drp, {
      id: "delete-automod-rule",
      label: M.intl.string(M.t["92m/01"]),
      action: j ? () => {
        (0, a.A)({
          title: M.intl.string(M.t.MmpqMC),
          subtitle: M.intl.string(M.t.XMdBLw)
        })
      } : h
    })
  }(e), m = (0, c.A)({
    id: e.id,
    label: M.intl.string(M.t.F64hjn)
  });
  return (0, l.jsx)(u.A, {
    context: i,
    object: x.ZSU.CONTEXT_MENU,
    children: (0, l.jsxs)(s.W1t, {
      navId: "automod-rule-context",
      onClose: d.Z_,
      "aria-label": M.intl.string(M.t.uT36So),
      onSelect: j,
      children: [(0, l.jsxs)(s.rXV, {
        children: [I, A && C]
      }), A && (0, l.jsx)(s.rXV, {
        children: m
      })]
    })
  })
}