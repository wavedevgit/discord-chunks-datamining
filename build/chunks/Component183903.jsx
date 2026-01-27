/** Chunk was on 80628 **/
/** chunk id: 183903, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => M
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

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function M(e) {
  let {
    clips: t,
    channelId: M,
    onShare: R,
    onEdit: F,
    onBeforeDelete: k,
    onAfterDelete: T,
    actionsDisabled: B = false,
    showShareAndEdit: U = false
  } = e, N = t[0], H = t.length > 1, {
    analyticsLocations: Z
  } = (0, s.Ay)(), G = (0, a.bG)([h.Ay, p.A, g.default, d.A], () => h.Ay.getFlattenedGuildIds().some(e => {
    let t = d.A.getGuild(e);
    return null != t && (0, c.ie)(t, p.A, g.default).canCreateExpressions
  })), q = (0, a.bG)([w.A], () => t.some(e => w.A.isClipExporting(e.id)));
  async function I() {
    (0, l.Z_)();
    let e = f.A.getChannel(M);
    (0, O.H1)([N.id]);
    try {
      let t = await (0, O.VO)(N);
      (0, r.mMO)(async () => {
        let {
          default: a
        } = await Promise.all([n.e("40556"), n.e("30913")]).then(n.bind(n, 6503)), r = (null == e ? true : e.guild_id) != null ? d.A.getGuild(e.guild_id) : null, l = null != r && (0, c.ie)(r, p.A, g.default).canCreateExpressions, o = null == N.name || "" === N.name ? (0, E.cM)(b.default.extractTimestamp(N.id)) : N.name, s = o.slice(0, j.Ah);
        return n => (0, i.jsx)(a, D(C({}, n), {
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
      (0, O.H1)(null)
    }
  }
  async function K() {
    (0, l.Z_)(), (0, O.H1)([N.id]);
    try {
      let e = await (0, O.VO)(N),
        t = await e.arrayBuffer(),
        n = (0, _.A)((0, m.uk)(N.filepath));
      await o.A.fileManager.saveWithDialog(S.from(t), n)
    } catch (e) {
      E.nx.error("Error exporting clip to file", e)
    } finally {
      (0, O.H1)(null)
    }
  }
  async function L() {
    (0, l.Z_)();
    let e = (0, x.t)(M);
    (0, O.H1)(t.map(e => e.id));
    try {
      await (0, v.K)(t, {
        channelId: e ? M : true,
        analyticsLocations: Z
      })
    } catch (e) {} finally {
      (0, O.H1)(null)
    }
    null == R || R()
  }
  async function W() {
    (0, l.Z_)(), (0, O.H1)([N.id]);
    try {
      let e = await (0, O.VO)(N),
        t = await (0, u.R_)(e),
        n = await t.arrayBuffer(),
        i = (0, _.A)((0, m.kh)(N.filepath)) + ".ogg";
      await o.A.fileManager.saveWithDialog(S.from(n), i)
    } catch (e) {
      E.nx.error("Error exporting clip to sound file", e)
    } finally {
      (0, O.H1)(null)
    }
  }
  return (0, i.jsxs)(r.W1t, {
    "data-menu-migrated-auto": true,
    navId: "clips-more-options",
    "aria-label": P.intl.string(P.t.PdRCRg),
    onClose: l.Z_,
    onSelect: l.Z_,
    children: [t.some(e => true === e.isTemporary) && (0, i.jsx)(r.Drp, {
      id: "add-to-library",
      label: P.intl.string(P.t["BfLmm+"]),
      icon: r.pa$,
      leadingAccessory: {
        type: "icon",
        icon: r.pa$
      },
      disabled: B,
      action: function() {
        (0, l.Z_)(), t.forEach(e => (0, O.w7)(e.id))
      }
    }), U && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(r.Drp, {
        id: "share",
        label: P.intl.string(P.t.RDE0Sc),
        icon: r.liv,
        leadingAccessory: {
          type: "icon",
          icon: r.liv
        },
        disabled: B && !q,
        action: L
      }), !H && (0, i.jsx)(r.Drp, {
        id: "edit",
        label: P.intl.string(P.t.bt75uw),
        icon: y.A,
        leadingAccessory: {
          type: "icon",
          icon: y.A
        },
        disabled: B,
        action: function() {
          (0, l.Z_)(), H || (0, r.mMO)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("19632"), n.e("11618")]).then(n.bind(n, 723028));
            return t => (0, i.jsx)(e, D(C({}, t), {
              channelId: M,
              clip: N
            }))
          }, {
            modalKey: E.DQ,
            stackingBehavior: "stack"
          }), null == F || F()
        }
      })]
    }), (0, i.jsx)(r.Drp, {
      id: "favorite",
      label: N.isFavorite ? P.intl.string(P.t.wDnlod) : P.intl.string(P.t.nPywqO),
      icon: N.isFavorite ? r.C3E : r.yhu,
      leadingAccessory: {
        type: "icon",
        icon: N.isFavorite ? r.C3E : r.yhu
      },
      disabled: B,
      action: function() {
        (0, l.Z_)(), t.forEach(e => (0, O.XK)(e))
      }
    }), !H && (0, i.jsxs)(r.Drp, {
      id: "clips-export-group",
      label: P.intl.string(P.t["WH/V85"]),
      children: [null != o.A.clipboard.copyFile && (0, i.jsx)(r.Drp, {
        icon: r.TdU,
        leadingAccessory: {
          type: "icon",
          icon: r.TdU
        },
        id: "clips-copy-video",
        label: P.intl.string(P.t["7NOhjN"]),
        action: function() {
          (0, l.Z_)(), o.A.clipboard.copyFile(N.filepath), (0, r.showToast)((0, r.createToast)(P.intl.string(P.t.mGZ66D), r.ToastType.SUCCESS))
        }
      }), G && N.type !== A.nQ.SCREENSHOT ? (0, i.jsx)(r.Drp, {
        icon: r.JMI,
        leadingAccessory: {
          type: "icon",
          icon: r.JMI
        },
        id: "clips-export-soundboard",
        label: P.intl.string(P.t.ABjMWI),
        action: I
      }) : null, (0, i.jsx)(r.Drp, {
        icon: r.s3U,
        leadingAccessory: {
          type: "icon",
          icon: r.s3U
        },
        id: "clips-export-file",
        label: N.type === A.nQ.SCREENSHOT ? P.intl.string(P.t.y5FgMk) : P.intl.string(P.t.sFgmNy),
        action: K
      }), N.type !== A.nQ.SCREENSHOT && (0, i.jsx)(r.Drp, {
        icon: r.s3U,
        leadingAccessory: {
          type: "icon",
          icon: r.s3U
        },
        id: "clips-export-sound-file",
        label: P.intl.string(P.t.db0NKG),
        action: W
      })]
    }), (0, i.jsx)(r.Drp, {
      icon: r.ucK,
      leadingAccessory: {
        type: "icon",
        icon: r.ucK
      },
      id: "clips-delete",
      label: P.intl.string(P.t.oyYWHE),
      color: "danger",
      disabled: B,
      action: function(e) {
        if ((0, l.Z_)(), null == e ? true : e.shiftKey) {
          null == k || k(), t.forEach(e => (0, O.oH)(e.filepath)), null == T || T();
          return
        }(0, r.mMO)(async () => {
          let {
            default: e
          } = await n.e("13367").then(n.bind(n, 223818));
          return n => (0, i.jsx)(e, D(C({
            clips: t
          }, n), {
            onBeforeDelete: k,
            onAfterDelete: async () => {
              await n.onClose(), null == T || T()
            }
          }))
        }, {
          stackingBehavior: "stack"
        })
      }
    })]
  })
}