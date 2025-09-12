/** Chunk was on 84725 **/
/** chunk id: 462499, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk658722 = require("./658722.js"),
  t = require.n(Chunk658722),
  Chunk399606 = require("./399606.js"),
  Chunk257465 = require("./257465.jsx"),
  Chunk369585 = require("./369585.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk471445 = require("./471445.js"),
  Chunk734893 = require("./734893.js"),
  Chunk208567 = require("./208567.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk768581 = require("./768581.js"),
  Chunk969632 = require("./969632.js"),
  Chunk580357 = require("./580357.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk353441 = require("./353441.js");

function f(e, n, l, a) {
  return {
    channelId: e.value,
    title: n,
    description: l,
    emoji: null,
    icon: null != a ? a : null
  }
}

function _(e) {
  var n, l;
  let {
    transitionState: i,
    onClose: _,
    resourceChannel: N,
    guildId: Z,
    onSave: y,
    onDelete: G,
    onIconUpload: S
  } = e, [P, U] = r.useState(null != (n = null == N ? true : N.title) ? n : ""), [X, B] = r.useState(null != (l = null == N ? true : N.description) ? l : ""), [R, W] = r.useState(function(e) {
    if (null == e) return null;
    let n = p.Z.getChannel(e.channelId);
    return null == n ? null : {
      value: n.id,
      label: n.name
    }
  }(N)), q = (0, s.e7)([C.Z], () => {
    var e;
    return null == (e = C.Z.getResourceChannel(null == N ? true : N.channelId)) ? true : e.icon
  }), H = (0, s.Wu)([C.Z], () => {
    var e, n;
    return (null != (n = null == (e = C.Z.getSettings()) ? true : e.resourceChannels) ? n : []).map(e => e.channelId)
  }), K = P.length < h.n || null == R, L = r.useCallback(() => {
    null == R || P.length <= 0 || (y(f(R, P, X, q)), _())
  }, [y, _, P, R, q, X]), O = r.useCallback(() => {
    null == G || G(), _()
  }, [G, _]), E = r.useCallback(e => {
    W(e)
  }, [W]), J = r.useCallback(e => Promise.resolve(g.ZP.getSelectableChannels(Z).filter(n => (0, h.k3)(n.channel) && !H.includes(n.channel.id) && t()(e, n.channel.name)).map(e => ({
    value: e.channel.id,
    label: e.channel.name
  }))), [Z, H]), T = r.useCallback(e => {
    if (null == e || null == Z) return null;
    let n = p.Z.getChannel(e.value),
      l = v.Z.getGuild(Z);
    if (null == n || null == l) return null;
    let r = (0, m.KS)(n, l);
    return null == r ? null : (0, a.jsx)(r, {
      size: "xs",
      color: "currentColor",
      className: b.channelIcon
    })
  }, [Z]), w = r.useCallback(e => {
    null != S && null != R && S(f(R, P, X), e)
  }, [R, P, S, X]), z = r.useCallback(() => null == q || null == R ? null : j.ZP.getResourceChannelIconURL({
    channelId: R.value,
    icon: q
  }), [R, q]), F = r.useMemo(() => [{
    variant: "secondary",
    text: I.intl.string(I.t["ETE/oK"]),
    onClick: _
  }, {
    variant: "primary",
    text: I.intl.string(I.t.R3BPHx),
    onClick: L,
    disabled: K
  }], [L, K, _]);
  return (0, a.jsxs)(o.I, {
    transitionState: i,
    onClose: _,
    children: [(0, a.jsx)("div", {
      className: b.closeButton,
      children: (0, a.jsx)(d.PZ7, {
        onClick: _
      })
    }), (0, a.jsxs)("div", {
      className: b.containerWithHeader,
      children: [(0, a.jsx)("div", {
        className: b.splitGroup,
        children: (0, a.jsx)("div", {
          className: b.header,
          children: (0, a.jsx)(u.X6q, {
            variant: "heading-md/semibold",
            color: "header-primary",
            children: I.intl.string(I.t.iREYFB)
          })
        })
      }), (0, a.jsxs)("div", {
        className: b.formGroup,
        children: [(0, a.jsxs)(u.X6q, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: [I.intl.string(I.t.nPa4Ji), (0, a.jsx)(k.Z, {})]
        }), (0, a.jsx)(u.VcW, {
          value: R,
          renderOptionPrefix: T,
          options: J,
          onChange: E
        }), (0, a.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: I.intl.string(I.t.eNDtJC)
        })]
      }), (0, a.jsx)("div", {
        className: b.separator
      }), (0, a.jsxs)("div", {
        className: b.formGroup,
        children: [(0, a.jsxs)(u.X6q, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: [I.intl.string(I.t["lFy+aW"]), (0, a.jsx)(k.Z, {})]
        }), (0, a.jsx)(u.oil, {
          value: P,
          onChange: U,
          placeholder: I.intl.string(I.t.XKUimJ),
          maxLength: h.am
        })]
      }), (0, a.jsx)("div", {
        className: b.separator
      }), (0, a.jsxs)("div", {
        className: b.formGroup,
        children: [(0, a.jsx)(u.X6q, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: I.intl.string(I.t.CnkilJ)
        }), (0, a.jsx)(u.Kx8, {
          value: X,
          onChange: B,
          placeholder: I.intl.string(I.t.na0V4O),
          maxLength: h.Vu
        })]
      }), (0, a.jsx)("div", {
        className: b.separator
      }), (0, a.jsxs)("div", {
        className: b.splitGroup,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(u.X6q, {
            variant: "heading-md/semibold",
            color: "header-primary",
            children: I.intl.string(I.t.CB6dys)
          }), (0, a.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: I.intl.string(I.t.Kcdk7O)
          })]
        }), (0, a.jsx)("div", {
          children: (0, a.jsx)(x.Z, {
            className: b.uploader,
            imageClassName: b.uploadImage,
            image: q,
            makeURL: z,
            icon: (0, a.jsx)(u.rG2, {
              size: "md",
              color: "currentColor"
            }),
            hideSize: true,
            onChange: w,
            iconClassName: b.uploadImageIcon,
            showIcon: null == q
          })
        })]
      })]
    }), (0, a.jsx)(c.G, {
      actions: F,
      leading: null != N ? (0, a.jsx)(u.Avr, {
        text: I.intl.string(I.t.N86XcH),
        variant: "critical",
        onClick: O
      }) : true
    })]
  })
}