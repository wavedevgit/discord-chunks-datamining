/** Chunk was on 30202 **/
/** chunk id: 325808, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk230711 = require("./230711.js"),
  Chunk825209 = require("./825209.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk383451 = require("./383451.js"),
  Chunk962100 = require("./962100.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk184767 = require("./184767.js"),
  Chunk149715 = require("./149715.js"),
  Chunk197571 = require("./197571.js");
let O = !Chunk358085.isPlatformEmbedded,
  v = (0, Chunk313201.hQ)();

function S(e) {
  return e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "\xa0ms")
}

function T(e) {
  let t, {
      inputMode: n
    } = e,
    {
      shortcut: r,
      delay: s,
      pttLatchingEnabled: m
    } = (0, l.cj)([g.Z], () => g.Z.getModeOptions()),
    {
      enableLatching: O
    } = (0, f.H)({
      location: "PTTTools"
    });
  return t = h.isPlatformEmbedded || n !== x.pM4.PUSH_TO_TALK ? (0, i.jsx)(o.R94, {
    type: o.R94.Types.DESCRIPTION,
    className: a()(j.pttToolsMessage, C.marginBottom8),
    children: _.intl.format(_.t.HVvn5e, {
      onClick: () => d.Z.setSection(x.oAB.KEYBINDS)
    })
  }) : (0, i.jsx)(o.R94, {
    type: o.R94.Types.DESCRIPTION,
    className: a()(j.pttToolsMessage, j.pttToolsWarning, C.marginBottom8),
    children: _.intl.format(_.t.zvMPOT, {
      onDownloadClick: () => (0, b.y)("Help Text PTT")
    })
  }), (0, i.jsxs)("div", {
    className: j.pttTools,
    children: [(0, i.jsxs)("div", {
      className: j.pttToolsFlex,
      children: [(0, i.jsx)("div", {
        className: j.column,
        children: (0, i.jsx)(o.xJW, {
          title: _.intl.string(_.t.YkDjVF),
          children: (0, i.jsx)(u.Z, {
            defaultValue: r,
            onChange: e => c.Z.setMode(n, {
              shortcut: e
            })
          })
        })
      }), (0, i.jsx)("div", {
        className: j.column,
        children: (0, i.jsxs)(o.xJW, {
          children: [(0, i.jsx)(o.vwX, {
            id: v,
            tag: o.RB0.H5,
            className: C.marginBottom8,
            children: _.intl.string(_.t.y0ShVl)
          }), (0, i.jsx)(o.iRW, {
            initialValue: s,
            onValueChange: e => c.Z.setMode(n, {
              delay: e
            }),
            onValueRender: S,
            maxValue: x.qhL,
            "aria-labelledby": v
          })]
        })
      })]
    }), O && (0, i.jsxs)(o.xJW, {
      className: C.marginTop8,
      children: [(0, i.jsx)(p.FG, {
        children: e => (0, i.jsxs)("div", {
          className: a()(E.horizontal, C.marginBottom4),
          children: [(0, i.jsx)(o.vwX, {
            tag: o.RB0.H3,
            className: C.marginReset,
            children: (0, i.jsx)("label", {
              htmlFor: e,
              children: _.intl.string(_.t.EGn1eH)
            })
          }), (0, i.jsx)(o.rsf, {
            id: e,
            checked: null != m && m,
            onChange: e => c.Z.setMode(n, {
              pttLatchingEnabled: e
            })
          })]
        })
      }), (0, i.jsx)(o.R94, {
        type: o.R94.Types.DESCRIPTION,
        className: C.marginBottom8,
        children: _.intl.string(_.t.iT257u)
      })]
    }), t]
  })
}

function I() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(), t = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getMode()), s = [{
    value: Chunk981631.pM4.VOICE_ACTIVITY,
    name: Chunk388032.intl.string(Chunk388032.t.cHCEOD)
  }, {
    value: Chunk981631.pM4.PUSH_TO_TALK,
    name: O ? Chunk388032.intl.string(Chunk388032.t["1AINrK"]) : Chunk388032.intl.string(Chunk388032.t.Q8gkVF)
  }], a = Chunk73800.useCallback(t => {
    let {
      value: r
    } = t;
    r === x.pM4.PUSH_TO_TALK && O && (0, o.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 468026));
      return t => (0, i.jsx)(e, function(e) {
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
      }({
        title: _.intl.string(_.t.Kdt0GR),
        confirmText: _.intl.string(_.t["1WjMbG"]),
        cancelText: _.intl.string(_.t.BddRzc),
        onConfirm: () => (0, b.y)("PTT Limited Modal"),
        body: _.intl.string(_.t.NIozvr)
      }, t))
    }), c.Z.setMode(r, true, true, {
      analyticsLocations: e
    })
  }, [module]);
  return (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
    children: [(0, Chunk255367.jsx)(Chunk481060.xJW, {
      title: Chunk388032.intl.string(Chunk388032.t["pS+K2N"]),
      className: Chunk197571.marginBottom20,
      children: (0, Chunk255367.jsx)(Chunk481060.FXm, {
        onChange: a,
        options: Chunk120356,
        value: exports
      })
    }), exports === Chunk981631.pM4.PUSH_TO_TALK && (0, Chunk255367.jsx)(T, {
      inputMode: exports
    })]
  })
}