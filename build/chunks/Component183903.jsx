/** Chunk was on 80628 **/
/** chunk id: 183903, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => R
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk77729 = require("./77729.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk931991 = require("./931991.js"),
  Chunk352024 = require("./352024.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk711014 = require("./711014.js"),
  Chunk287809 = require("./287809.js"),
  Chunk549685 = require("./549685.jsx"),
  Chunk741394 = require("./741394.js"),
  Chunk661191 = require("./661191.js"),
  Chunk274372 = require("./274372.js"),
  Chunk372684 = require("./372684.js"),
  Chunk439818 = require("./439818.js"),
  Chunk399925 = require("./399925.js"),
  Chunk74847 = require("./74847.js"),
  Chunk602902 = require("./602902.jsx"),
  Chunk696016 = require("./696016.js"),
  Chunk980504 = require("./980504.js"),
  Chunk985018 = require("./985018.jsx"),
  S = require("./264572.js").Buffer;

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function R(e) {
  let {
    clips: t,
    channelId: R,
    onShare: M,
    onEdit: F,
    onBeforeDelete: k,
    onAfterDelete: B,
    actionsDisabled: T = false,
    showShareAndEdit: N = false
  } = e, H = t[0], U = t.length > 1, {
    analyticsLocations: Z
  } = (0, s.Ay)(), G = (0, i.bG)([h.Ay, d.A, g.default, p.A], () => h.Ay.getFlattenedGuildIds().some(e => {
    let t = p.A.getGuild(e);
    return null != t && (0, u.ie)(t, d.A, g.default).canCreateExpressions
  })), q = (0, i.bG)([w.A], () => t.some(e => w.A.isClipExporting(e.id)));
  async function I() {
    (0, l.Z_)();
    let e = f.A.getChannel(R);
    (0, x.H1)([H.id]);
    try {
      let t = await (0, x.VO)(H);
      (0, r.mMO)(async () => {
        let {
          default: i
        } = await Promise.all([n.e("40556"), n.e("10691")]).then(n.bind(n, 6503)), r = (null == e ? true : e.guild_id) != null ? p.A.getGuild(e.guild_id) : null, l = null != r && (0, u.ie)(r, d.A, g.default).canCreateExpressions, o = null == H.name || "" === H.name ? (0, v.cM)(b.default.extractTimestamp(H.id)) : H.name, s = o.slice(0, j.Ah);
        return n => (0, a.jsx)(i, C(D({}, n), {
          showGuildPicker: true,
          guildId: l ? null == e ? true : e.guild_id : true,
          sourceFile: {
            file: new File([t], "".concat(o, ".mp4"), {
              type: "video/mp4"
            }),
            name: s
          }
        }))
      }, {
        stackingBehavior: "stack"
      })
    } catch (e) {} finally {
      (0, x.H1)(null)
    }
  }
  async function K() {
    (0, l.Z_)(), (0, x.H1)([H.id]);
    try {
      let e = await (0, x.VO)(H),
        t = await e.arrayBuffer(),
        n = (0, O.A)((0, m.uk)(H.filepath));
      await o.A.fileManager.saveWithDialog(S.from(t), n)
    } catch (e) {
      v.nx.error("Error exporting clip to file", e)
    } finally {
      (0, x.H1)(null)
    }
  }
  async function L() {
    (0, l.Z_)();
    let e = (0, A.t)(R);
    (0, x.H1)(t.map(e => e.id));
    try {
      await (0, E.K)(t, {
        channelId: e ? R : true,
        analyticsLocations: Z
      })
    } catch (e) {} finally {
      (0, x.H1)(null)
    }
    null == M || M()
  }
  async function W() {
    (0, l.Z_)(), (0, x.H1)([H.id]);
    try {
      let e = await (0, x.VO)(H),
        t = await (0, c.R_)(e),
        n = await t.arrayBuffer(),
        a = (0, O.A)((0, m.kh)(H.filepath)) + ".ogg";
      await o.A.fileManager.saveWithDialog(S.from(n), a)
    } catch (e) {
      v.nx.error("Error exporting clip to sound file", e)
    } finally {
      (0, x.H1)(null)
    }
  }
  return (0, a.jsxs)(r.W1t, {
    navId: "clips-more-options",
    "aria-label": P.intl.string(P.t.PdRCRg),
    onClose: l.Z_,
    onSelect: l.Z_,
    children: [t.some(e => true === e.isTemporary) && (0, a.jsx)(r.Drp, {
      id: "add-to-library",
      label: P.intl.string(P.t["BfLmm+"]),
      icon: r.pa$,
      disabled: T,
      action: function() {
        (0, l.Z_)(), t.forEach(e => (0, x.w7)(e.id))
      }
    }), N && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(r.Drp, {
        id: "share",
        label: P.intl.string(P.t.RDE0Sc),
        icon: r.liv,
        disabled: T && !q,
        action: L
      }), !U && (0, a.jsx)(r.Drp, {
        id: "edit",
        label: P.intl.string(P.t.bt75uw),
        icon: y.A,
        disabled: T,
        action: function() {
          (0, l.Z_)(), U || (0, r.mMO)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("19632"), n.e("11618")]).then(n.bind(n, 723028));
            return t => (0, a.jsx)(e, C(D({}, t), {
              channelId: R,
              clip: H
            }))
          }, {
            modalKey: v.DQ,
            stackingBehavior: "stack"
          }), null == F || F()
        }
      })]
    }), (0, a.jsx)(r.Drp, {
      id: "favorite",
      label: H.isFavorite ? P.intl.string(P.t.wDnlod) : P.intl.string(P.t.nPywqO),
      icon: H.isFavorite ? r.C3E : r.yhu,
      disabled: T,
      action: function() {
        (0, l.Z_)(), t.forEach(e => (0, x.XK)(e))
      }
    }), !U && (0, a.jsxs)(r.Drp, {
      id: "clips-export-group",
      label: P.intl.string(P.t["WH/V85"]),
      children: [null != o.A.clipboard.copyFile && (0, a.jsx)(r.Drp, {
        icon: r.TdU,
        id: "clips-copy-video",
        label: P.intl.string(P.t["7NOhjN"]),
        action: function() {
          (0, l.Z_)(), o.A.clipboard.copyFile(H.filepath), (0, r.showToast)((0, r.createToast)(P.intl.string(P.t.mGZ66D), r.ToastType.SUCCESS))
        }
      }), G && H.type !== _.nQ.SCREENSHOT ? (0, a.jsx)(r.Drp, {
        icon: r.JMI,
        id: "clips-export-soundboard",
        label: P.intl.string(P.t.ABjMWI),
        action: I
      }) : null, (0, a.jsx)(r.Drp, {
        icon: r.s3U,
        id: "clips-export-file",
        label: H.type === _.nQ.SCREENSHOT ? P.intl.string(P.t.y5FgMk) : P.intl.string(P.t.sFgmNy),
        action: K
      }), H.type !== _.nQ.SCREENSHOT && (0, a.jsx)(r.Drp, {
        icon: r.s3U,
        id: "clips-export-sound-file",
        label: P.intl.string(P.t.db0NKG),
        action: W
      })]
    }), (0, a.jsx)(r.Drp, {
      icon: r.ucK,
      id: "clips-delete",
      label: P.intl.string(P.t.oyYWHE),
      color: "danger",
      disabled: T,
      action: function(e) {
        if ((0, l.Z_)(), null == e ? true : e.shiftKey) {
          null == k || k(), t.forEach(e => (0, x.oH)(e.filepath)), null == B || B();
          return
        }(0, r.mMO)(async () => {
          let {
            default: e
          } = await n.e("13367").then(n.bind(n, 223818));
          return n => (0, a.jsx)(e, C(D({
            clips: t
          }, n), {
            onBeforeDelete: k,
            onAfterDelete: async () => {
              await n.onClose(), null == B || B()
            }
          }))
        }, {
          stackingBehavior: "stack"
        })
      }
    })]
  })
}