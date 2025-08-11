/** Chunk was on 30419 **/
/** chunk id: 395199, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./539854.js"), require("./388685.js");
var l, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk304586 = require("./304586.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class j extends Chunk73800.PureComponent {
  render() {
    let {
      onClose: e
    } = this.props;
    return (0, Chunk255367.jsxs)(Chunk481060.xBx, {
      separator: false,
      justify: Chunk600164.Z.Justify.BETWEEN,
      children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
        variant: "heading-md/semibold",
        children: this.props.text
      }), null != module ? (0, Chunk255367.jsx)(Chunk481060.olH, {
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
    onDismissError: s
  } = e;
  return (0, r.jsxs)("div", {
    className: g.content,
    children: [(0, r.jsx)("div", {
      className: a()(g.image, t)
    }), n, (0, r.jsx)(c.W, {
      children: null != l ? (0, r.jsx)(d.oXn, {
        className: g.error,
        children: (0, r.jsx)(d.kzN, {
          onDismiss: s,
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
    children: [(0, r.jsx)(d.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: g.pendingCancellationIcon
    }), (0, r.jsx)(d.Text, {
      variant: "text-md/normal",
      className: g.pendingCancellationMessage,
      children: p.intl.format(p.t.SFpsCA, {
        date: n.currentPeriodEnd,
        canceledCount: t
      })
    })]
  })
};

function b(e) {
  let {
    imageClass: t,
    blurb: n,
    guild: l,
    warning: s,
    error: i,
    onDismissError: a,
    slotCount: o = 1,
    canceledCount: c = 0
  } = e;
  return (0, r.jsxs)(C, {
    imageClass: t,
    error: i,
    onDismissError: a,
    children: [(0, r.jsx)(d.Text, {
      variant: "text-md/normal",
      children: n
    }), (0, r.jsx)(m.Z, {
      className: g.guildCard,
      guild: l,
      subscriptionChange: o
    }), (0, r.jsx)(d.Text, {
      variant: "text-md/normal",
      children: s
    }), c > 0 ? (0, r.jsx)(v, {
      canceledCount: c
    }) : null]
  })
}
class y extends Chunk73800.PureComponent {
  render() {
    let {
      confirmation: e,
      confirmationLabel: t,
      isModifyingSubscription: n,
      onConfirm: l,
      onCancel: s
    } = this.props;
    return (0, Chunk255367.jsx)(Chunk481060.mzw, {
      children: (0, Chunk255367.jsxs)(Chunk481060.hE2, {
        direction: "horizontal-reverse",
        children: [(0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: module,
          onClick: l,
          loading: require,
          "aria-label": exports
        }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "secondary",
          text: Chunk388032.intl.string(Chunk388032.t["ETE/oK"]),
          onClick: Chunk73800,
          disabled: require
        })]
      })
    })
  }
}
class S extends(l = Chunk73800.PureComponent) {
  render() {
    let {
      guild: e,
      header: t,
      blurb: n,
      warning: l,
      confirmation: i,
      confirmationLabel: a,
      imageClass: o,
      error: c,
      isModifyingSubscription: u,
      onConfirm: m,
      onCancel: x,
      onDismissError: h,
      canceledCount: p
    } = this.props;
    return (0, Chunk255367.jsxs)(Chunk73800.Fragment, {
      children: [(0, Chunk255367.jsx)(j, {
        text: exports
      }), (0, Chunk255367.jsx)(Chunk481060.hzk, {
        children: (0, Chunk255367.jsx)(b, {
          guild: module,
          blurb: require,
          warning: l,
          imageClass: Chunk442837,
          error: Chunk215569,
          onDismissError: Chunk709054,
          canceledCount: Chunk388032
        })
      }), (0, Chunk255367.jsx)(y, {
        confirmation: Chunk120356,
        confirmationLabel: a,
        isModifyingSubscription: Chunk600164,
        onConfirm: Chunk777789,
        onCancel: Chunk78839
      })]
    })
  }
}
f(S, "Header", j), f(S, "ApplyBody", b), f(S, "TransferBody", function(e) {
  var t, n;
  let {
    imageClass: l,
    blurb: i,
    fromGuilds: a,
    toGuild: o,
    error: c,
    onDismissError: u,
    slotCount: x = 1,
    canceledCount: f = 0
  } = e, j = s.useRef(a), b = null == (t = j.current) ? true : t.length, y = null == (n = j.current) ? true : n.reduce((e, t) => (e.hasOwnProperty(t.id) || (e[t.id] = []), e[t.id].push(t), e), {});
  return (0, r.jsxs)(C, {
    imageClass: l,
    error: c,
    onDismissError: u,
    children: [(0, r.jsx)(d.Text, {
      variant: "text-md/normal",
      children: i
    }), (0, r.jsx)(d.Text, {
      variant: "text-xs/bold",
      className: g.transferGuildCardHeader,
      children: p.intl.format(p.t["5zQYEx"], {
        guildCount: b
      })
    }), null != y ? h.default.keys(y).map(e => (0, r.jsx)(m.Z, {
      className: g.transferFromGuildCard,
      guild: y[e][0],
      subscriptionChange: false * y[e].length
    }, e)) : null, (0, r.jsx)(d.Text, {
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
    }), f > 0 ? (0, r.jsx)(v, {
      canceledCount: f
    }) : null]
  })
}), f(S, "Footer", y);
let N = S