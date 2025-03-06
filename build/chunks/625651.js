/** Chunk was on 31924 **/
n.d(t, {
  default: () => m
});
var r = n(200651),
  o = n(192379),
  a = n(481060),
  c = n(17622),
  s = n(279604),
  i = n(535396),
  l = n(730621),
  u = n(388032),
  d = n(136646);

function m(e) {
  var t, n, {
      guildId: m,
      powerup: b
    } = e,
    p = function(e, t) {
      if (null == e) return {};
      var n, r, o = function(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
    }(e, ["guildId", "powerup"]);
  let {
    onDeactivate: f,
    error: x,
    isLoading: j
  } = (0, s.Z)(m, b), {
    onClose: O
  } = p, _ = o.useCallback(e => {
    f(e).then(() => {
      null == O || O()
    })
  }, [O, f]);
  return (0, r.jsxs)(a.Y0X, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r
      })
    }
    return e
  }({
    className: d.modal,
    size: a.CgR.SMALL
  }, p), n = n = {
    children: [(0, r.jsxs)(a.hzk, {
      className: d.modalContentContainer,
      scrollbarType: "none",
      children: [(0, r.jsxs)("div", {
        className: d.headerContainer,
        children: [(0, r.jsxs)("div", {
          className: d.header,
          children: [(0, r.jsx)(a.X6q, {
            variant: "heading-md/semibold",
            children: u.NW.formatToPlainString(l.Z.iEBw1N, {
              perk: b.title
            })
          }), (0, r.jsx)(a.Text, {
            variant: "text-sm/medium",
            children: u.NW.formatToPlainString(l.Z["7o0K+/"], {
              perk: b.title
            })
          })]
        }), (0, r.jsx)(a.olH, {
          onClick: p.onClose
        })]
      }), (() => {
        switch (b.type) {
          case i.Us.LEVEL:
            return (0, r.jsx)(c.Z, {
              powerup: b
            });
          case i.Us.PERK:
            return (0, r.jsx)("img", {
              alt: "",
              src: "",
              className: d.exampleImage
            })
        }
      })(), (0, r.jsxs)("div", {
        className: d.warningContainer,
        children: [(0, r.jsx)(a.Text, {
          color: "status-warning",
          variant: "eyebrow",
          children: u.NW.string(l.Z.OVt5CA)
        }), (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          children: u.NW.formatToPlainString(l.Z["4jSvr6"], {
            perk: b.title,
            memberCount: 5
          })
        })]
      }), null != x && (0, r.jsx)(a.Text, {
        className: d.errorText,
        color: "status-danger",
        variant: "text-sm/semibold",
        children: x
      })]
    }), (0, r.jsxs)(a.mzw, {
      className: d.footer,
      children: [(0, r.jsx)(a.zxk, {
        submitting: j,
        color: a.Ttl.RED,
        className: d.button,
        onClick: _,
        children: u.NW.string(l.Z.PYPdl5)
      }), (0, r.jsx)(a.zxk, {
        color: a.Ttl.PRIMARY,
        className: d.button,
        onClick: p.onClose,
        children: u.NW.string(u.t["ETE/oK"])
      })]
    })]
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}