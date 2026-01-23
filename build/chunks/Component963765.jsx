/** Chunk was on 59195 **/
/** chunk id: 963765, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./321073.js"), require("./228524.js"), require("./896048.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk933681 = require("./933681.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk155718 = require("./155718.js"),
  Chunk409200 = require("./409200.jsx"),
  Chunk568185 = require("./568185.js"),
  Chunk219444 = require("./219444.js"),
  Chunk284738 = require("./284738.js"),
  Chunk95701 = require("./95701.js"),
  Chunk769765 = require("./769765.js"),
  Chunk71393 = require("./71393.js"),
  Chunk147036 = require("./147036.js"),
  Chunk488926 = require("./488926.js"),
  Chunk499785 = require("./499785.js"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk205285 = require("./205285.js");

function C(e) {
  var t, n;
  let {
    guildId: C,
    transitionState: I,
    onSubmit: R,
    onClose: S
  } = e, [L, k] = i.useState(A._Ee), [M, G] = i.useState(A.rbe.GUILD_TEXT), [j, D] = i.useState(""), [N, O] = i.useState(false), H = (0, a.bG)([x.A], () => x.A.getGuild(C), [C]), B = (0, h.R)(C), U = (0, g.Vf)(H), V = i.useMemo(() => (function(e) {
    let {
      canCreateStageChannel: t,
      canCreateMediaChannel: n
    } = e, i = [{
      icon: u.N$i,
      label: y.intl.string(y.t.pnuRXC),
      value: A.rbe.GUILD_TEXT,
      description: y.intl.string(y.t["Hf5Lb+"])
    }, {
      icon: u.HKD,
      label: y.intl.string(y.t.Sx55Oh),
      value: A.rbe.GUILD_VOICE,
      description: y.intl.string(y.t.pqfkoF)
    }];
    return t && i.push({
      icon: u.qux,
      label: y.intl.string(y.t.pNWst0),
      value: A.rbe.GUILD_STAGE_VOICE,
      description: y.intl.string(y.t.VPAwgo)
    }), i.push({
      icon: u.bSJ,
      label: y.intl.string(y.t.eAVID5),
      value: A.rbe.GUILD_FORUM,
      description: y.intl.string(y.t.iZ5pgg)
    }), n && i.push({
      icon: u.xfq,
      label: y.intl.string(y.t["6x6fVg"]),
      value: A.rbe.GUILD_MEDIA,
      description: y.intl.string(y.t.JyCrwS),
      isBeta: true
    }), i.map(e => {
      let {
        icon: t,
        label: n,
        value: i,
        description: r,
        isBeta: o
      } = e;
      return {
        name: (0, l.jsxs)("div", {
          className: w.OA,
          children: [(0, l.jsx)(t, {
            className: w.Kk
          }), (0, l.jsxs)("div", {
            children: [(0, l.jsxs)(u.Text, {
              variant: "text-md/normal",
              color: "text-strong",
              children: [n, (0, l.jsx)(_.p, {
                isBeta: o
              })]
            }), (0, l.jsx)(u.Text, {
              variant: "text-xs/normal",
              color: "text-default",
              children: r
            })]
          })]
        }),
        value: i,
        channelIcon: t
      }
    })
  })({
    canCreateStageChannel: B,
    canCreateMediaChannel: U
  }), [B, U]), W = (0, a.bG)([b.A], () => b.A.getCategories(C)._categories, [C]), K = i.useMemo(() => W.map(e => {
    let {
      channel: t
    } = e;
    return {
      id: t.id,
      value: t.id,
      label: t.name
    }
  }), [W]), q = null != (t = null == (n = V.find(e => e.value === M)) ? true : n.channelIcon) ? t : T.FX, X = "" !== j;
  return (0, l.jsx)("form", {
    onSubmit: function(e) {
      if (e.preventDefault(), !X) return;
      O(true);
      let t = {
        type: M,
        name: j,
        parent_id: "null" !== L ? L : true,
        permission_overwrites: [{
          id: C,
          type: d.r2.ROLE,
          allow: m.x3,
          deny: A.xBc.VIEW_CHANNEL
        }]
      };
      E.A.post({
        url: A.Rsh.GUILD_CHANNELS(C),
        body: t,
        oldFormErrors: true,
        trackedActionData: {
          event: r.NetworkActionNames.CHANNEL_CREATE,
          properties: e => {
            var t, n;
            return (0, s.e0)({
              is_private: true,
              channel_id: null == e || null == (t = e.body) ? true : t.id,
              channel_type: null == e || null == (n = e.body) ? true : n.type
            })
          }
        },
        rejectWithError: true
      }).then(e => {
        p.A.checkGuildTemplateDirty(C), R(e.body.id), S()
      }, e => {}).finally(() => {
        O(false)
      })
    },
    children: (0, l.jsx)(o.Modal, {
      transitionState: I,
      title: y.intl.string(y.t["fUYU+j"]),
      onClose: S,
      actionBarInput: (0, l.jsx)(u.QWc, {
        text: y.intl.string(y.t["13/7kX"]),
        onClick: S
      }),
      actions: [{
        variant: "primary",
        text: y.intl.string(y.t["R3BPH+"]),
        loading: N,
        disabled: !X,
        type: "submit"
      }],
      children: (0, l.jsxs)(u.BJc, {
        gap: 16,
        children: [(0, l.jsx)(u.l6P, {
          label: y.intl.string(y.t.vHCZwr),
          placeholder: y.intl.string(y.t["g/Rr2S"]),
          value: L,
          options: K,
          onSelectionChange: k,
          selectionMode: "single",
          fullWidth: true
        }), (0, l.jsx)(c.$d, {
          label: y.intl.string(y.t["7ZcXG2"]),
          options: V,
          value: M,
          onChange: e => {
            let {
              value: t
            } = e;
            return G(t)
          }
        }), (0, l.jsx)(u.ksK, {
          label: y.intl.string(y.t.PVbHDl),
          value: j,
          onChange: function(e) {
            (0, f.ke)(M) && (e = (0, v.an)(e)), D(e)
          },
          maxLength: A.Ign,
          placeholder: y.intl.string(y.t["bw/b8E"]),
          leading: q,
          autoFocus: true
        })]
      })
    })
  })
}