/** Chunk was on 51724 **/
n.d(t, {
  Z: () => L
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(442837),
  o = n(692547),
  c = n(481060),
  d = n(224706),
  u = n(225433),
  m = n(570928),
  p = n(594190),
  g = n(320724),
  h = n(297700),
  f = n(77498),
  x = n(283595),
  b = n(626135),
  N = n(251625),
  _ = n(358085),
  E = n(210887),
  C = n(981631),
  j = n(388032),
  O = n(362952),
  v = n(423308),
  S = n(612064),
  T = n(951565),
  I = n(802138);

function y(e) {
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
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let P = l.ZP.connectStores([E.Z], () => ({
    theme: E.Z.theme
  }))(c.ubH),
  R = (0, _.isWindows)();

function D(e) {
  let {
    onClose: t
  } = e, n = (0, l.e7)([p.ZP], () => p.ZP.getCandidateGames()), [s, o] = i.useState(null), u = n.map(e => ({
    key: e.pid,
    value: e,
    label: null != e.name ? e.name : ""
  }));
  return (0, r.jsxs)(c.VqE, {
    className: a()(O.addGamePopout, v.elevationBorderHigh),
    "aria-label": j.NW.string(j.t.GTCx0t),
    children: [(0, r.jsx)(c.VcW, {
      placeholder: j.NW.string(j.t.XqMe3N),
      value: s,
      options: u,
      onChange: function(e) {
        o(e)
      },
      renderOptionLabel: e => (0, r.jsx)(c.Text, {
        variant: "text-md/medium",
        color: "text-normal",
        lineClamp: 1,
        children: e.label
      })
    }), (0, r.jsx)(c.$i$, {
      className: a()(I.marginTop8, I.marginBottom8)
    }), (0, r.jsxs)("div", {
      className: a()(O.actions, S.horizontal),
      children: [(0, r.jsx)(c.zxk, {
        className: O.cancelButton,
        look: c.iLD.LINK,
        color: c.Ttl.PRIMARY,
        onClick: t,
        children: j.NW.string(j.t["ETE/oK"])
      }), (0, r.jsx)(c.zxk, {
        disabled: null == s,
        onClick: function() {
          null != s && (d.Z.addGame(s.pid, s.name), t())
        },
        children: j.NW.string(j.t.GTCx0t)
      })]
    })]
  })
}

function Z(e) {
  var t;
  let {
    rawGame: n,
    nowPlaying: s = !1,
    isOverride: g
  } = e, N = (0, l.cj)([p.ZP, f.Z, x.Z], () => (0, p.FZ)(n, [p.ZP, f.Z, x.Z])), [_, E] = i.useState(!1), [v, I] = i.useState(null !== (t = N.name) && void 0 !== t ? t : "???"), P = a()(S.flexCenter, {
    [O.game]: !s,
    [O.activeGame]: s,
    [T.card]: !s,
    [O.nowPlaying]: null != N && s
  });

  function D() {
    d.Z.toggleDetection(N)
  }

  function Z() {
    if (_) return;
    let e = null != N.id ? f.Z.getDetectableGame(N.id) : null;
    b.default.track(C.rMx.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
      application_id: null == e ? void 0 : e.id,
      game_name: N.name
    }), (0, c.showToast)((0, c.createToast)(j.NW.formatToPlainString(j.t["6klMOj"], {
      gameName: N.name
    }), c.ToastType.SUCCESS)), E(!0)
  }
  return (0, r.jsxs)("div", {
    className: P,
    children: [(0, r.jsxs)("div", {
      className: a()(O.gameNameLastPlayed, S.vertical),
      children: [N.verified && !g ? (0, r.jsxs)("div", {
        className: O.detectedApplication,
        children: [(0, r.jsx)("div", {
          className: O.gameName,
          children: N.name
        }), (0, r.jsx)(c.ua7, {
          text: j.NW.string(j.t["4PJP5u"]),
          children: e => (0, r.jsx)(h.Z, A(y({
            className: O.gameVerifiedIcon,
            size: 18,
            color: o.Z.unsafe_rawColors.BRAND_500.css
          }, e), {
            children: (0, r.jsx)(c.kmB, {
              size: "custom",
              width: 18,
              height: 18,
              color: o.Z.unsafe_rawColors.WHITE_500.css
            })
          }))
        })]
      }) : (0, r.jsx)("input", {
        className: a()(O.gameName, O.gameNameInput),
        type: "text",
        maxLength: 128,
        value: v,
        onBlur: function() {
          N.name !== v && d.Z.editName(N, v)
        },
        onKeyDown: function(e) {
          13 === e.keyCode && (e.currentTarget.blur(), e.preventDefault())
        },
        onChange: e => I(e.target.value)
      }), function() {
        let e;
        let {
          played: t,
          exePath: n
        } = N;
        return s ? e = j.NW.string(j.t.VbV5dn) : null != t && "" !== t && (e = j.NW.format(j.t.gGeOEx, {
          when: t
        })), (0, r.jsx)("div", {
          className: O.lastPlayed,
          children: (0, r.jsx)(m.Z, {
            hoverText: null != n && "" !== n ? n.toUpperCase() : "",
            children: e
          })
        })
      }()]
    }), g ? null : _ ? null : (0, r.jsx)("div", {
      className: a()(S.flexCenter, S.noWrap, S.justifyBetween, O.toggleContainer),
      children: (0, r.jsx)(c.ua7, {
        text: j.NW.string(j.t["y0B+lp"]),
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return (0, r.jsx)(c.P3F, {
            "aria-label": j.NW.string(j.t["y0B+lp"]),
            className: O.toggleIcon,
            onClick: Z,
            onMouseEnter: t,
            onMouseLeave: n,
            children: (0, r.jsx)(c.U65, {
              size: "md",
              color: "currentColor",
              className: O.toggleIconOn,
              colorClass: O.fill
            })
          })
        }
      })
    }), function() {
      let {
        detectable: e
      } = N, t = e ? (0, r.jsx)(c.tEF, {
        size: "md",
        color: "currentColor",
        className: O.toggleIconOn,
        colorClass: O.fill
      }) : (0, r.jsx)(c.kZF, {
        size: "md",
        color: "currentColor",
        className: O.toggleIconOff,
        colorClass: O.fill
      });
      return (0, r.jsx)("div", {
        className: a()(S.flexCenter, S.noWrap, S.justifyBetween, O.toggleContainer),
        children: (0, r.jsx)(c.ua7, {
          text: j.NW.string(j.t.QmitzM),
          children: e => {
            let {
              onMouseEnter: n,
              onMouseLeave: i
            } = e;
            return (0, r.jsx)(c.P3F, {
              "aria-label": j.NW.string(j.t.QmitzM),
              className: O.toggleIcon,
              onClick: D,
              onMouseEnter: n,
              onMouseLeave: i,
              children: t
            })
          }
        })
      })
    }(), function() {
      if (!R) return null;
      let {
        overlay: e,
        overlayWarn: t
      } = N, n = e ? (0, r.jsx)(c.pzj, {
        size: "md",
        color: "currentColor",
        className: O.toggleIconOn,
        colorClass: O.fill
      }) : (0, r.jsx)(c.o8v, {
        size: "md",
        color: "currentColor",
        className: O.toggleIconOff,
        colorClass: O.fill
      }), i = t ? (0, r.jsx)(c.ua7, {
        text: j.NW.string(j.t.Vfw2Ly),
        children: e => (0, r.jsx)("i", y({
          className: O.overlayWarningIcon
        }, e))
      }) : null;
      return (0, r.jsxs)("div", {
        className: a()(S.flexCenter, S.noWrap, S.justifyBetween, O.toggleContainer),
        children: [i, (0, r.jsx)(c.ua7, {
          text: j.NW.string(j.t["1+O+Tk"]),
          children: t => {
            let {
              onMouseEnter: i,
              onMouseLeave: s
            } = t;
            return (0, r.jsx)(c.P3F, {
              "aria-label": j.NW.string(j.t["1+O+Tk"]),
              className: O.toggleIcon,
              onClick: () => {
                var t;
                return t = !e, void d.Z.toggleOverlay(N, t, t)
              },
              onMouseEnter: i,
              onMouseLeave: s,
              children: n
            })
          }
        })]
      })
    }(), !s || g ? (0, r.jsx)(u.Z, {
      className: O.removeGame,
      onClick: function() {
        d.Z.deleteEntry(N)
      }
    }) : null]
  })
}

function w() {
  return (0, r.jsx)("div", {
    className: a()(S.flexCenter, O.notDetected, O.activeGame),
    children: (0, r.jsxs)("div", {
      className: a()(O.gameNameLastPlayed, S.vertical),
      children: [(0, r.jsx)("div", {
        className: O.gameName,
        children: j.NW.string(j.t["H68X9/"])
      }), (0, r.jsx)("div", {
        className: O.lastPlayed,
        children: j.NW.string(j.t.T5Ilm5)
      })]
    })
  })
}

function k(e) {
  let {
    children: t
  } = e;
  return (0, r.jsxs)(P, {
    className: I.marginTop40,
    children: [(0, r.jsx)(c.oxh, {
      darkSrc: n(879601),
      lightSrc: n(889e3),
      width: 430,
      height: 250
    }), t]
  })
}
let W = (0, N.oH)(function() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map(e => e.exePath))
  }),
  L = function(e) {
    let {
      className: t,
      showHeader: n = !0
    } = e, s = (0, l.Wu)([p.ZP], () => p.ZP.getGamesSeen(!0)), {
      runningGame: o,
      overrideExePaths: d
    } = (0, l.cj)([p.ZP], () => ({
      runningGame: p.ZP.getVisibleGame(),
      overrideExePaths: W(...p.ZP.getOverrides())
    }));
    return i.useEffect(() => ((0, g.Ky)(), g.P7), []), (0, r.jsxs)(c.hjN, {
      tag: "h1",
      title: n ? j.NW.string(j.t.AVDyEh) : null,
      className: t,
      children: [null != o ? (0, r.jsx)(Z, {
        rawGame: o,
        isOverride: d.has(o.exePath),
        nowPlaying: !0
      }, (0, p.rH)(o)) : (0, r.jsx)(w, {}), (0, r.jsxs)("div", {
        className: a()(O.nowPlayingAdd, I.marginReset, I.marginTop8, I.marginBottom20),
        children: [(0, r.jsx)("span", {
          children: j.NW.string(j.t.xwhoqK)
        }), (0, r.jsx)(c.yRy, {
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, r.jsx)(D, {
              onClose: t
            })
          },
          align: "center",
          position: "bottom",
          children: e => (0, r.jsx)(c.zxk, A(y({}, e), {
            look: c.iLD.LINK,
            size: c.PhG.MIN,
            color: c.Ttl.LINK,
            children: j.NW.string(j.t.GjgdXV)
          }))
        })]
      }), 0 === s.length ? (0, r.jsx)(k, {
        children: (0, r.jsx)(c.OZU, {
          children: j.NW.string(j.t["1yiJws"])
        })
      }) : (0, r.jsxs)(c.hjN, {
        className: I.marginTop40,
        children: [(0, r.jsx)(c.vwX, {
          className: I.marginBottom4,
          children: j.NW.string(j.t.jCOdv7)
        }), (0, r.jsx)(c.R94, {
          type: c.geA.DESCRIPTION,
          children: j.NW.format(j.t.KPA3m5, {
            igdbLink: "https://www.igdb.com/about"
          })
        }), s.map(e => (0, r.jsx)(Z, {
          rawGame: e,
          isOverride: d.has(e.exePath)
        }, (0, p.rH)(e)))]
      })]
    })
  }