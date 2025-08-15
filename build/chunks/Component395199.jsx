/** Chunk was on 30419 **/
/** chunk id: 395199, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./539854.js"), require("./388685.js");
var l, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk215569 = require("./215569.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk777789 = require("./777789.jsx"),
  Chunk78839 = require("./78839.js"),
  Chunk709054 = require("./709054.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk542886 = require("./542886.js");

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class f extends Chunk647438.PureComponent {
  render() {
    let {
      onClose: e
    } = this.props;
    return (0, Chunk951288.jsxs)(Chunk481060.xBx, {
      separator: false,
      justify: Chunk600164.Z.Justify.BETWEEN,
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-md/semibold",
        children: this.props.text
      }), null != module ? (0, Chunk951288.jsx)(Chunk481060.olH, {
        onClick: module
      }) : null]
    })
  }
}

function C(e) {
  let {
    imageClass: t,
    children: n,
    error: l,
    onDismissError: i
  } = e;
  return (0, r.jsxs)("div", {
    className: g.content,
    children: [(0, r.jsx)("div", {
      className: a()(g.image, t)
    }), n, (0, r.jsx)(d.W, {
      children: null != l ? (0, r.jsx)(c.oXn, {
        className: g.error,
        children: (0, r.jsx)(c.kzN, {
          onDismiss: i,
          children: l.message
        })
      }) : null
    })]
  })
}
let v = e => {
  let {
    canceledCount: t
  } = e, n = (0, o.e7)([x.Z], () => x.Z.getPremiumTypeSubscription());
  return null == n ? null : (0, r.jsxs)("div", {
    className: g.pendingCancellation,
    children: [(0, r.jsx)(c.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: g.pendingCancellationIcon
    }), (0, r.jsx)(c.Text, {
      variant: "text-md/normal",
      className: g.pendingCancellationMessage,
      children: p.intl.format(p.t.SFpsCA, {
        date: n.currentPeriodEnd,
        canceledCount: t
      })
    })]
  })
};

function y(e) {
  let {
    imageClass: t,
    blurb: n,
    guild: l,
    warning: i,
    error: s,
    onDismissError: a,
    slotCount: o = 1,
    canceledCount: d = 0
  } = e;
  return (0, r.jsxs)(C, {
    imageClass: t,
    error: s,
    onDismissError: a,
    children: [(0, r.jsx)(c.Text, {
      variant: "text-md/normal",
      children: n
    }), (0, r.jsx)(m.Z, {
      className: g.guildCard,
      guild: l,
      subscriptionChange: o
    }), (0, r.jsx)(c.Text, {
      variant: "text-md/normal",
      children: i
    }), d > 0 ? (0, r.jsx)(v, {
      canceledCount: d
    }) : null]
  })
}
class b extends Chunk647438.PureComponent {
  render() {
    let {
      confirmation: e,
      confirmationLabel: t,
      isModifyingSubscription: n,
      onConfirm: l,
      onCancel: i
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk481060.mzw, {
      children: (0, Chunk951288.jsxs)(Chunk481060.hE2, {
        direction: "horizontal-reverse",
        children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: module,
          onClick: l,
          loading: require,
          "aria-label": exports
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "secondary",
          text: Chunk388032.intl.string(Chunk388032.t["ETE/oK"]),
          onClick: Chunk647438,
          disabled: require
        })]
      })
    })
  }
}
class S extends(l = Chunk647438.PureComponent) {
  render() {
    let {
      guild: e,
      header: t,
      blurb: n,
      warning: l,
      confirmation: s,
      confirmationLabel: a,
      imageClass: o,
      error: d,
      isModifyingSubscription: u,
      onConfirm: m,
      onCancel: x,
      onDismissError: h,
      canceledCount: p
    } = this.props;
    return (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
      children: [(0, Chunk951288.jsx)(f, {
        text: exports
      }), (0, Chunk951288.jsx)(Chunk481060.hzk, {
        children: (0, Chunk951288.jsx)(y, {
          guild: module,
          blurb: require,
          warning: l,
          imageClass: Chunk442837,
          error: Chunk215569,
          onDismissError: Chunk709054,
          canceledCount: Chunk388032
        })
      }), (0, Chunk951288.jsx)(b, {
        confirmation: Chunk120356,
        confirmationLabel: a,
        isModifyingSubscription: Chunk600164,
        onConfirm: Chunk777789,
        onCancel: Chunk78839
      })]
    })
  }
}
j(S, "Header", f), j(S, "ApplyBody", y), j(S, "TransferBody", function(e) {
  var t, n;
  let {
    imageClass: l,
    blurb: s,
    fromGuilds: a,
    toGuild: o,
    error: d,
    onDismissError: u,
    slotCount: x = 1,
    canceledCount: j = 0
  } = e, f = i.useRef(a), y = null == (t = f.current) ? true : t.length, b = null == (n = f.current) ? true : n.reduce((e, t) => (e.hasOwnProperty(t.id) || (e[t.id] = []), e[t.id].push(t), e), {});
  return (0, r.jsxs)(C, {
    imageClass: l,
    error: d,
    onDismissError: u,
    children: [(0, r.jsx)(c.Text, {
      variant: "text-md/normal",
      children: s
    }), (0, r.jsx)(c.Text, {
      variant: "text-xs/bold",
      className: g.transferGuildCardHeader,
      children: p.intl.format(p.t["5zQYEx"], {
        guildCount: y
      })
    }), null != b ? h.default.keys(b).map(e => (0, r.jsx)(m.Z, {
      className: g.transferFromGuildCard,
      guild: b[e][0],
      subscriptionChange: false * b[e].length
    }, e)) : null, (0, r.jsx)(c.Text, {
      variant: "text-xs/normal",
      className: g.transferGuildCardHeader,
      children: p.intl.format(p.t.ct6oxM, {
        slotCount: x
      })
    }), (0, r.jsx)("div", {
      className: g.activeTransferGuildCardBorder,
      children: (0, r.jsx)(m.Z, {
        className: g.transferToGuildCard,
        guild: o,
        subscriptionChange: null != a ? a.length : 1
      })
    }), j > 0 ? (0, r.jsx)(v, {
      canceledCount: j
    }) : null]
  })
}), j(S, "Footer", b);
let N = S