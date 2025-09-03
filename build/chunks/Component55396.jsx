/** Chunk was on 46923 **/
/** chunk id: 55396, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => G
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk658722 = require("./658722.js"),
  s = require.n(Chunk658722),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk224706 = require("./224706.js"),
  Chunk812206 = require("./812206.js"),
  Chunk835473 = require("./835473.js"),
  Chunk206295 = require("./206295.js"),
  Chunk669764 = require("./669764.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk77498 = require("./77498.js"),
  Chunk49012 = require("./49012.js"),
  Chunk709054 = require("./709054.js"),
  Chunk810568 = require("./810568.js"),
  Chunk701488 = require("./701488.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk406479 = require("./406479.js");

function k(e) {
  let {
    showOutdatedInfoOption: t,
    onChoice: a
  } = e, i = [{
    name: _.intl.string(_.t["o/xUFh"]),
    value: 1
  }, ...t ? [{
    name: _.intl.string(_.t["ry3/tL"]),
    value: 2
  }] : [], {
    name: _.intl.string(_.t.JyZlTk),
    value: 3
  }];
  return (0, n.jsxs)(c.hzk, {
    className: I.content,
    children: [(0, n.jsx)(c.X6q, {
      variant: "heading-xl/bold",
      className: I.header,
      children: _.intl.string(_.t["8itBsL"])
    }), (0, n.jsx)(c.Text, {
      className: I.tip,
      variant: "text-md/normal",
      children: _.intl.string(_.t.X7ab09)
    }), (0, n.jsx)(c.FXm, {
      className: I.radioGroup,
      options: i,
      onChange: e => {
        let {
          value: t
        } = e;
        return a(t)
      }
    })]
  })
}

function b(e) {
  let {
    applicationId: t,
    onSubmitted: a,
    viewId: i
  } = e, l = (0, u.q)(t);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(c.hzk, {
      className: I.content,
      children: [(0, n.jsx)(c.X6q, {
        variant: "heading-xl/bold",
        className: I.header,
        children: _.intl.string(_.t.lWk2u7)
      }), (0, n.jsx)(c.Text, {
        className: I.tip,
        variant: "text-md/normal",
        children: _.intl.string(_.t.ZQfxS0)
      })]
    }), (0, n.jsx)(c.mzw, {
      className: I.footer,
      children: (0, n.jsx)(c.zxk, {
        variant: "primary",
        text: _.intl.string(_.t.RSATCA),
        fullWidth: true,
        onClick: () => {
          (0, f.q)({
            href: (null == l ? true : l.name) != null ? "".concat("https://www.igdb.com/search?utf8=✓&q=").concat(encodeURIComponent(l.name)) : "https://www.igdb.com",
            trusted: true
          }), (0, v.MH)({
            applicationId: t,
            submitted: true,
            viewId: i
          }), a()
        }
      })
    })]
  })
}
let C = e => {
  let {
    id: t,
    name: a,
    applicationRecord: i
  } = e;
  return (0, n.jsxs)("div", {
    className: I.gameSuggestion,
    children: [null != t ? (0, n.jsx)(x.Z, {
      game: i,
      className: I.smolGameIcon
    }) : (0, n.jsx)(c.vdY, {
      className: I.customGameNameIcon,
      size: "sm"
    }), a]
  })
};

function w(e) {
  var t, a, l;
  let {
    applicationId: x,
    onSubmitted: f,
    viewId: k
  } = e, [b, w] = i.useState(""), S = (0, o.e7)([m.Z], () => m.Z.getApplication(x)), [z, G] = i.useState(""), L = (0, o.e7)([h.Z], () => h.Z.getGame(x)), y = null != (a = null != (t = null == L ? true : L.name) ? t : null == S ? true : S.name) ? a : "", Z = null == S ? true : S.getIconURL(N.Si.LARGE), {
    primaryColor: F,
    secondaryColor: X
  } = (0, g.Z)(Z);
  i.useEffect(() => {
    d.Z.getDetectableGames()
  }, []);
  let q = (0, o.Wu)([p.Z], () => {
      let e = ((null == b ? true : b.length) > 0 ? b : y).toLowerCase(),
        t = null != z ? p.Z.getDetectableGame(z) : true;
      return (0, r.chain)(p.Z.games).filter(t => s()(e, t.name.toLowerCase())).filter(e => e.id !== x).take(4).concat(null != t ? [t] : []).compact().uniqBy("id").value()
    }, [x, z, y, b]),
    B = (0, u.Z)(q.map(e => e.id)),
    R = (0, r.chain)(B).compact().keyBy("id").value(),
    T = b.length > 0 && !q.map(e => e.name.toLowerCase()).includes(b.toLowerCase()),
    A = z === x || null === z && 0 === b.length,
    W = q.map(e => {
      let {
        name: t,
        id: a
      } = e;
      return {
        name: (0, n.jsx)(C, {
          name: t,
          id: a,
          applicationRecord: R[a]
        }),
        value: a
      }
    });
  return T && W.push({
    name: (0, n.jsx)(C, {
      name: b
    }),
    value: j.default.cast("")
  }), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(c.hzk, {
      className: I.content,
      children: [(0, n.jsx)(c.X6q, {
        variant: "heading-xl/bold",
        className: I.header,
        children: _.intl.string(_.t.tJzB6O)
      }), (0, n.jsx)(c.Text, {
        className: I.tip,
        variant: "text-md/normal",
        children: _.intl.string(_.t["44R0Iy"])
      }), (0, n.jsxs)("div", {
        className: I.gameInfoBox,
        style: {
          background: "linear-gradient(45deg, ".concat(F, ", ").concat(X, ")")
        },
        children: [null != Z && (0, n.jsx)("img", {
          className: I.gameIcon,
          src: Z,
          alt: ""
        }), (0, n.jsx)(c.X6q, {
          variant: "heading-lg/semibold",
          className: I.gameTitle,
          children: null != (l = null == L ? true : L.name) ? l : null == S ? true : S.name
        })]
      }), (0, n.jsxs)("div", {
        className: I.applicationSearch,
        children: [(0, n.jsx)(c.E1j, {
          className: I.searchBar,
          query: b,
          onChange: e => {
            if (0 === e.length) null === z && G(x);
            else {
              var t;
              let a = q.find(t => t.name.toLowerCase() === e.toLowerCase());
              G(null != (t = null == a ? true : a.id) ? t : "")
            }
            w(e)
          },
          onClear: () => {
            null === z && G(x), w("")
          },
          placeholder: _.intl.string(_.t.UedRLy)
        }), (0, n.jsx)(c.FXm, {
          size: c.FXm.Sizes.NONE,
          radioPosition: "right",
          withTransparentBackground: true,
          radioItemClassName: I.gameSuggestionRadioItem,
          value: z,
          options: W,
          onChange: e => {
            let {
              value: t
            } = e;
            return G(t)
          }
        })]
      })]
    }), (0, n.jsx)(c.mzw, {
      className: I.footer,
      children: (0, n.jsx)(c.zxk, {
        variant: "primary",
        text: _.intl.string(_.t.geKm7u),
        fullWidth: true,
        onClick: () => {
          let e = null != z && z.length > 0;
          (0, v.MH)({
            applicationId: x,
            suggestedGameApplicationId: e ? z : true,
            suggestedGameName: e ? true : b,
            submitted: true,
            viewId: k
          }), f()
        },
        disabled: A
      })
    })]
  })
}

function S(e) {
  let {
    applicationId: t,
    onSubmitted: a,
    viewId: l
  } = e, [s, r] = i.useState("");
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(c.hzk, {
      className: I.content,
      children: [(0, n.jsx)(c.X6q, {
        variant: "heading-xl/bold",
        className: I.header,
        children: _.intl.string(_.t["/nALeX"])
      }), (0, n.jsx)(c.Text, {
        className: I.tip,
        variant: "text-md/normal",
        children: _.intl.string(_.t.WOuJ8v)
      }), (0, n.jsx)("div", {
        className: I.otherFeedbackInput,
        children: (0, n.jsx)(c.Kx8, {
          value: s,
          onChange: e => r(e),
          placeholder: _.intl.string(_.t.AHCr5e),
          maxLength: 300
        })
      })]
    }), (0, n.jsx)(c.mzw, {
      className: I.footer,
      children: (0, n.jsx)(c.zxk, {
        variant: "primary",
        text: _.intl.string(_.t.geKm7u),
        fullWidth: true,
        onClick: () => {
          (0, v.MH)({
            applicationId: t,
            submitted: true,
            feedback: s,
            viewId: l
          }), a()
        },
        disabled: 0 === s.length
      })
    })]
  })
}

function z(e) {
  let {
    onClose: t
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(c.hzk, {
      className: I.content,
      children: [(0, n.jsx)(c.X6q, {
        variant: "heading-xl/bold",
        className: I.header,
        children: _.intl.string(_.t["pelg/f"])
      }), (0, n.jsx)(c.Text, {
        className: I.tip,
        variant: "text-md/normal",
        children: _.intl.string(_.t["55S/OD"])
      })]
    }), (0, n.jsx)(c.mzw, {
      className: I.footer,
      children: (0, n.jsx)(c.zxk, {
        variant: "primary",
        text: _.intl.string(_.t.i4jeWV),
        fullWidth: true,
        onClick: t
      })
    })]
  })
}

function G(e) {
  let {
    applicationId: t,
    viewId: a,
    transitionState: l,
    onClose: s,
    showOutdatedInfoOption: r
  } = e, [o, d] = i.useState(0);
  return (0, n.jsx)(c.Y0X, {
    size: c.CgR.SMALL,
    transitionState: l,
    parentComponent: "GameProfileFeedbackModal",
    children: (() => {
      switch (o) {
        case 0:
          return (0, n.jsx)(k, {
            showOutdatedInfoOption: r,
            onChoice: e => d(e)
          });
        case 1:
          return (0, n.jsx)(w, {
            applicationId: t,
            viewId: a,
            onSubmitted: () => d(4)
          });
        case 2:
          return (0, n.jsx)(b, {
            applicationId: t,
            viewId: a,
            onSubmitted: () => s()
          });
        case 3:
          return (0, n.jsx)(S, {
            applicationId: t,
            viewId: a,
            onSubmitted: () => d(4)
          });
        case 4:
          return (0, n.jsx)(z, {
            onClose: s
          })
      }
    })()
  })
}