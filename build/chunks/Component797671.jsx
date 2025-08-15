/** Chunk was on 63042 **/
/** chunk id: 797671, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./539854.js"), require("./953529.js"), require("./388685.js"), require("./457542.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk283693 = require("./283693.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk218613 = require("./218613.jsx"),
  Chunk911969 = require("./911969.js"),
  Chunk313201 = require("./313201.js"),
  Chunk408987 = require("./408987.js"),
  Chunk312146 = require("./312146.js"),
  Chunk60222 = require("./60222.js"),
  Chunk131704 = require("./131704.js"),
  Chunk324067 = require("./324067.js"),
  Chunk430824 = require("./430824.js"),
  Chunk934415 = require("./934415.js"),
  Chunk700785 = require("./700785.js"),
  Chunk573261 = require("./573261.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk920454 = require("./920454.js");

function S(e) {
  var t, a;
  let {
    guildId: S,
    transitionState: j,
    onSubmit: B,
    onClose: D
  } = e, E = (0, p.Dt)(), T = (0, p.Dt)(), R = (0, p.Dt)(), [M, W] = r.useState(w.Sc2), [G, k] = r.useState(w.d4z.GUILD_TEXT), [A, H] = r.useState(""), [U, O] = r.useState(false), P = (0, o.e7)([g.Z], () => g.Z.getGuild(S), [S]), Z = (0, m.m)(S), V = (0, h.Ui)(P), z = r.useMemo(() => (function(e) {
    let {
      canCreateStageChannel: t,
      canCreateMediaChannel: a
    } = e, r = [{
      icon: s.VL1,
      label: N.intl.string(N.t.pnuRXF),
      value: w.d4z.GUILD_TEXT,
      description: N.intl.string(N.t.Hf5Lb2)
    }, {
      icon: s.gj8,
      label: N.intl.string(N.t.Sx55Oj),
      value: w.d4z.GUILD_VOICE,
      description: N.intl.string(N.t.pqfkoK)
    }];
    return t && r.push({
      icon: s.ewx,
      label: N.intl.string(N.t.pNWst7),
      value: w.d4z.GUILD_STAGE_VOICE,
      description: N.intl.string(N.t.VPAwgo)
    }), r.push({
      icon: s.Mmi,
      label: N.intl.string(N.t.eAVIDw),
      value: w.d4z.GUILD_FORUM,
      description: N.intl.string(N.t.iZ5pgo)
    }), a && r.push({
      icon: s.XBm,
      label: N.intl.string(N.t["6x6fVl"]),
      value: w.d4z.GUILD_MEDIA,
      description: N.intl.string(N.t.JyCrwc),
      isBeta: true
    }), r.map(e => {
      let {
        icon: t,
        label: a,
        value: r,
        description: i,
        isBeta: o
      } = e;
      return {
        name: (0, n.jsxs)("div", {
          className: y.channelOptionWrapper,
          children: [(0, n.jsx)(t, {
            className: y.icon
          }), (0, n.jsxs)("div", {
            children: [(0, n.jsxs)(s.Text, {
              variant: "text-md/normal",
              color: "header-primary",
              children: [a, (0, n.jsx)(_.p, {
                isBeta: o
              })]
            }), (0, n.jsx)(s.Text, {
              variant: "text-xs/normal",
              color: "header-secondary",
              children: i
            })]
          })]
        }),
        value: r,
        channelIcon: t
      }
    })
  })({
    canCreateStageChannel: Z,
    canCreateMediaChannel: V
  }), [Z, V]), F = (0, o.e7)([f.Z], () => f.Z.getCategories(S)._categories, [S]), X = r.useMemo(() => F.map(e => {
    let {
      channel: t
    } = e;
    return {
      value: t.id,
      label: t.name
    }
  }), [F]), q = null != (a = null == (t = z.find(e => e.value === G)) ? true : t.channelIcon) ? a : C.Vq, J = "" !== A;
  return (0, n.jsx)("form", {
    onSubmit: function(e) {
      if (e.preventDefault(), !J) return;
      O(true);
      let t = {
        type: G,
        name: A,
        parent_id: "null" !== M ? M : true,
        permission_overwrites: [{
          id: S,
          type: u.BN.ROLE,
          allow: v.Hn,
          deny: w.Plq.VIEW_CHANNEL
        }]
      };
      L.Z.post({
        url: w.ANM.GUILD_CHANNELS(S),
        body: t,
        oldFormErrors: true,
        trackedActionData: {
          event: i.NetworkActionNames.CHANNEL_CREATE,
          properties: e => {
            var t, a;
            return (0, l.iG)({
              is_private: true,
              channel_id: null == e || null == (t = e.body) ? true : t.id,
              channel_type: null == e || null == (a = e.body) ? true : a.type
            })
          }
        },
        rejectWithError: true
      }).then(e => {
        b.Z.checkGuildTemplateDirty(S), B(e.body.id), D()
      }, e => {}).finally(() => {
        O(false)
      })
    },
    children: (0, n.jsx)(c.Modal, {
      transitionState: j,
      title: N.intl.string(N.t["fUYU+v"]),
      onClose: D,
      actionBarInput: (0, n.jsx)(s.Avr, {
        text: N.intl.string(N.t["13/7kZ"]),
        onClick: D
      }),
      actions: [{
        variant: "primary",
        text: N.intl.string(N.t.R3BPHx),
        loading: U,
        disabled: !J,
        type: "submit"
      }],
      children: (0, n.jsxs)(s.Kqy, {
        gap: 16,
        children: [(0, n.jsx)(s.xJW, {
          title: N.intl.string(N.t.vHCZws),
          titleId: E,
          children: (0, n.jsx)(s.q4e, {
            placeholder: N.intl.string(N.t["g/Rr2d"]),
            value: M,
            options: X,
            onChange: e => W(e),
            "aria-labelledby": E
          })
        }), (0, n.jsx)(s.xJW, {
          title: N.intl.string(N.t["7ZcXGx"]),
          titleId: T,
          children: (0, n.jsx)(s.FXm, {
            options: z,
            value: G,
            onChange: e => {
              let {
                value: t
              } = e;
              return k(t)
            },
            "aria-labelledby": T
          })
        }), (0, n.jsx)(s.xJW, {
          title: N.intl.string(N.t.PVbHDg),
          titleId: R,
          children: (0, n.jsx)(d.Is, {
            value: A,
            onChange: function(e) {
              (0, x.zi)(G) && (e = (0, I.Nj)(e)), H(e)
            },
            maxLength: w.HN8,
            placeholder: N.intl.string(N.t["bw/b8P"]),
            className: y.inputWrapper,
            inputClassName: y.inputInner,
            prefixElement: (0, n.jsx)(q, {
              className: y.inputPrefix,
              color: "currentColor",
              "aria-hidden": true
            }),
            "aria-labelledby": R,
            autoFocus: true
          })
        })]
      })
    })
  })
}