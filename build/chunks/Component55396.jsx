/** Chunk was on 46923 **/
/** chunk id: 55396, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => B
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk658722 = require("./658722.js"),
  s = require.n(Chunk658722),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
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

function w(e) {
  let {
    showOutdatedInfoOption: t,
    onChoice: a
  } = e, i = [{
    name: _.intl.string(_.t["o/xUFu"]),
    value: 1
  }, ...t ? [{
    name: _.intl.string(_.t["ry3/tJ"]),
    value: 2
  }] : [], {
    name: _.intl.string(_.t.JyZlTt),
    value: 3
  }];
  return (0, n.jsxs)(d.hzk, {
    className: b.content,
    children: [(0, n.jsx)(d.Heading, {
      variant: "heading-xl/bold",
      className: b.header,
      children: _.intl.string(_.t["8itBsB"])
    }), (0, n.jsx)(d.Text, {
      className: b.tip,
      variant: "text-md/normal",
      children: _.intl.string(_.t.X7ab05)
    }), (0, n.jsx)(c.Gu, {
      className: b.radioGroup,
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

function C(e) {
  let {
    applicationId: t,
    onSubmitted: a,
    viewId: i
  } = e, l = (0, g.q)(t);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(d.hzk, {
      className: b.content,
      children: [(0, n.jsx)(d.Heading, {
        variant: "heading-xl/bold",
        className: b.header,
        children: _.intl.string(_.t.lWk2u1)
      }), (0, n.jsx)(d.Text, {
        className: b.tip,
        variant: "text-md/normal",
        children: _.intl.string(_.t.ZQfxS8)
      })]
    }), (0, n.jsx)(d.mzw, {
      className: b.footer,
      children: (0, n.jsx)(d.Button, {
        variant: "primary",
        text: _.intl.string(_.t.RSATCJ),
        fullWidth: true,
        onClick: () => {
          (0, j.q)({
            href: (null == l ? true : l.name) != null ? "".concat("https://www.igdb.com/search?utf8=✓&q=").concat(encodeURIComponent(l.name)) : "https://www.igdb.com",
            trusted: true
          }), (0, N.MH)({
            applicationId: t,
            submitted: true,
            viewId: i
          }), a()
        }
      })
    })]
  })
}
let k = e => {
  let {
    id: t,
    name: a,
    applicationRecord: i
  } = e;
  return (0, n.jsxs)("div", {
    className: b.gameSuggestion,
    children: [null != t ? (0, n.jsx)(p.Z, {
      game: i,
      className: b.smolGameIcon
    }) : (0, n.jsx)(d.vdY, {
      className: b.customGameNameIcon,
      size: "sm"
    }), a]
  })
};

function S(e) {
  var t, a, l;
  let {
    applicationId: p,
    onSubmitted: j,
    viewId: w
  } = e, [C, S] = i.useState(""), G = (0, o.e7)([u.Z], () => u.Z.getApplication(p)), [z, B] = i.useState(""), L = (0, o.e7)([x.Z], () => x.Z.getGame(p)), R = null != (a = null != (t = null == L ? true : L.name) ? t : null == G ? true : G.name) ? a : "", Z = null == G ? true : G.getIconURL(I.Si.LARGE), {
    primaryColor: T,
    secondaryColor: y
  } = (0, h.Z)(Z);
  i.useEffect(() => {
    m.Z.getDetectableGames()
  }, []);
  let F = (0, o.Wu)([f.Z], () => {
      let e = ((null == C ? true : C.length) > 0 ? C : R).toLowerCase(),
        t = null != z ? f.Z.getDetectableGame(z) : true;
      return (0, r.chain)(f.Z.games).filter(t => s()(e, t.name.toLowerCase())).filter(e => e.id !== p).take(4).concat(null != t ? [t] : []).compact().uniqBy("id").value()
    }, [p, z, R, C]),
    H = (0, g.Z)(F.map(e => e.id)),
    W = (0, r.chain)(H).compact().keyBy("id").value(),
    A = C.length > 0 && !F.map(e => e.name.toLowerCase()).includes(C.toLowerCase()),
    M = z === p || null === z && 0 === C.length,
    q = F.map(e => {
      let {
        name: t,
        id: a
      } = e;
      return {
        name: (0, n.jsx)(k, {
          name: t,
          id: a,
          applicationRecord: W[a]
        }),
        value: a
      }
    });
  return A && q.push({
    name: (0, n.jsx)(k, {
      name: C
    }),
    value: v.default.cast("")
  }), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(d.hzk, {
      className: b.content,
      children: [(0, n.jsx)(d.Heading, {
        variant: "heading-xl/bold",
        className: b.header,
        children: _.intl.string(_.t.tJzB6F)
      }), (0, n.jsx)(d.Text, {
        className: b.tip,
        variant: "text-md/normal",
        children: _.intl.string(_.t["44R0Iw"])
      }), (0, n.jsxs)("div", {
        className: b.gameInfoBox,
        style: {
          background: "linear-gradient(45deg, ".concat(T, ", ").concat(y, ")")
        },
        children: [null != Z && (0, n.jsx)("img", {
          className: b.gameIcon,
          src: Z,
          alt: ""
        }), (0, n.jsx)(d.Heading, {
          variant: "heading-lg/semibold",
          className: b.gameTitle,
          children: null != (l = null == L ? true : L.name) ? l : null == G ? true : G.name
        })]
      }), (0, n.jsxs)("div", {
        className: b.applicationSearch,
        children: [(0, n.jsx)(d.E1j, {
          query: C,
          onChange: e => {
            if (0 === e.length) null === z && B(p);
            else {
              var t;
              let a = F.find(t => t.name.toLowerCase() === e.toLowerCase());
              B(null != (t = null == a ? true : a.id) ? t : "")
            }
            S(e)
          },
          onClear: () => {
            null === z && B(p), S("")
          },
          placeholder: _.intl.string(_.t.UedRL3)
        }), (0, n.jsx)(c.Gu, {
          size: c.l7.NONE,
          radioPosition: "right",
          withTransparentBackground: true,
          radioItemClassName: b.gameSuggestionRadioItem,
          value: z,
          options: q,
          onChange: e => {
            let {
              value: t
            } = e;
            return B(t)
          }
        })]
      })]
    }), (0, n.jsx)(d.mzw, {
      className: b.footer,
      children: (0, n.jsx)(d.Button, {
        variant: "primary",
        text: _.intl.string(_.t.geKm7t),
        fullWidth: true,
        onClick: () => {
          let e = null != z && z.length > 0;
          (0, N.MH)({
            applicationId: p,
            suggestedGameApplicationId: e ? z : true,
            suggestedGameName: e ? true : C,
            submitted: true,
            viewId: w
          }), j()
        },
        disabled: M
      })
    })]
  })
}

function G(e) {
  let {
    applicationId: t,
    onSubmitted: a,
    viewId: l
  } = e, [s, r] = i.useState("");
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(d.hzk, {
      className: b.content,
      children: [(0, n.jsx)(d.Heading, {
        variant: "heading-xl/bold",
        className: b.header,
        children: _.intl.string(_.t["/nALeY"])
      }), (0, n.jsx)(d.Text, {
        className: b.tip,
        variant: "text-md/normal",
        children: _.intl.string(_.t.WOuJ8t)
      }), (0, n.jsx)("div", {
        className: b.otherFeedbackInput,
        children: (0, n.jsx)(d.Kx8, {
          value: s,
          onChange: e => r(e),
          placeholder: _.intl.string(_.t.AHCr5T),
          maxLength: 300
        })
      })]
    }), (0, n.jsx)(d.mzw, {
      className: b.footer,
      children: (0, n.jsx)(d.Button, {
        variant: "primary",
        text: _.intl.string(_.t.geKm7t),
        fullWidth: true,
        onClick: () => {
          (0, N.MH)({
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
    children: [(0, n.jsxs)(d.hzk, {
      className: b.content,
      children: [(0, n.jsx)(d.Heading, {
        variant: "heading-xl/bold",
        className: b.header,
        children: _.intl.string(_.t["pelg/R"])
      }), (0, n.jsx)(d.Text, {
        className: b.tip,
        variant: "text-md/normal",
        children: _.intl.string(_.t["55S/OM"])
      })]
    }), (0, n.jsx)(d.mzw, {
      className: b.footer,
      children: (0, n.jsx)(d.Button, {
        variant: "primary",
        text: _.intl.string(_.t.i4jeWR),
        fullWidth: true,
        onClick: t
      })
    })]
  })
}

function B(e) {
  let {
    applicationId: t,
    viewId: a,
    transitionState: l,
    onClose: s,
    showOutdatedInfoOption: r
  } = e, [o, c] = i.useState(0);
  return (0, n.jsx)(d.Y0X, {
    size: d.CgR.SMALL,
    transitionState: l,
    parentComponent: "GameProfileFeedbackModal",
    children: (() => {
      switch (o) {
        case 0:
          return (0, n.jsx)(w, {
            showOutdatedInfoOption: r,
            onChoice: e => c(e)
          });
        case 1:
          return (0, n.jsx)(S, {
            applicationId: t,
            viewId: a,
            onSubmitted: () => c(4)
          });
        case 2:
          return (0, n.jsx)(C, {
            applicationId: t,
            viewId: a,
            onSubmitted: () => s()
          });
        case 3:
          return (0, n.jsx)(G, {
            applicationId: t,
            viewId: a,
            onSubmitted: () => c(4)
          });
        case 4:
          return (0, n.jsx)(z, {
            onClose: s
          })
      }
    })()
  })
}