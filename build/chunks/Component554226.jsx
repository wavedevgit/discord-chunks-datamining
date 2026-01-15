/** Chunk was on 91236 **/
/** chunk id: 554226, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk446411 = require("./446411.jsx"),
  Chunk468846 = require("./468846.jsx"),
  Chunk70097 = require("./70097.jsx"),
  Chunk299379 = require("./299379.js"),
  Chunk454585 = require("./454585.js"),
  Chunk524444 = require("./524444.jsx"),
  Chunk55406 = require("./55406.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk653198 = require("./653198.js");

function y(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
let j = Chunk454585.Z.reactParserFor(Chunk55406.default.getDefaultRules(Chunk653198)),
  x = {};
class k extends Chunk473749.PureComponent {
  track(e, t, r) {
    this.props.track(e, t, r)
  }
  renderFooter() {
    return (0, n.jsxs)("div", {
      className: m.footer,
      children: [(0, n.jsx)(a.eee, {
        "aria-label": b.intl.string(b.t["/84uiD"]),
        className: m.socialLink,
        href: (0, d.Z)(O.RK.TWITTER),
        target: "blank",
        children: (0, n.jsx)(a.TAi, {
          size: "xs",
          color: "currentColor"
        })
      }), (0, n.jsx)(a.eee, {
        "aria-label": b.intl.string(b.t["h0or/l"]),
        className: m.socialLink,
        href: O.fK7.FACEBOOK_URL,
        target: "blank",
        children: (0, n.jsx)(a.tdR, {
          size: "xs",
          color: "currentColor"
        })
      }), (0, n.jsx)(a.eee, {
        "aria-label": b.intl.string(b.t["5uVPyf"]),
        className: m.socialLink,
        href: O.fK7.INSTAGRAM_URL,
        target: "blank",
        children: (0, n.jsx)(a.gST, {
          size: "xs",
          color: "currentColor"
        })
      }), (0, n.jsx)(a.Text, {
        variant: "text-xs/normal",
        children: b.intl.string(b.t.EjVVI7)
      })]
    })
  }
  renderVideo() {
    let {
      changeLog: e
    } = this.props, t = e.youtube_video_id, l = e.video, o = e.image;
    if (null != t && "" !== t) return (0, n.jsx)(s.BC, {
      className: m.video,
      allowFullScreen: false,
      href: "https://youtu.be/".concat(t),
      thumbnail: {
        url: "https://i.ytimg.com/vi/".concat(t, "/hqdefault.jpg"),
        width: 432,
        height: 240
      },
      video: {
        url: "https://www.youtube.com/embed/".concat(t, "?vq=large&rel=0&controls=0&showinfo=0"),
        width: 432,
        height: 240
      },
      provider: u.pn.YOUTUBE,
      maxWidth: 432,
      maxHeight: 240,
      renderVideoComponent: p.lV,
      renderImageComponent: p.Yi,
      renderLinkComponent: p.iT,
      onPlay: () => {
        this.track(O.rMx.CHANGE_LOG_VIDEO_INTERACTED, {}, true)
      }
    });
    if (null != l && "" !== l) {
      let e = l.startsWith("https://") ? l : r(595173)("./".concat(l));
      return (0, n.jsx)(h.Z, {
        src: e,
        poster: o,
        width: 432,
        height: 240,
        loop: true,
        muted: true,
        autoPlay: true,
        className: m.video,
        onPlay: () => {
          this.track(O.rMx.CHANGE_LOG_VIDEO_INTERACTED, {}, true)
        }
      })
    }
    if (null == o || "" === o) return null;
    {
      let e = o.startsWith("https://") ? o : r(595173)("./".concat(o));
      return (0, n.jsx)("img", {
        className: m.image,
        alt: "",
        src: e,
        width: 432,
        height: 240
      })
    }
  }
  render() {
    var e, t;
    let r = this.props,
      {
        changeLog: l,
        onScroll: o,
        track: a
      } = r,
      s = function(e, t) {
        if (null == e) return {};
        var r, n, l = function(e, t) {
          if (null == e) return {};
          var r, n, l = {},
            o = Object.keys(e);
          for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
          return l
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
        }
        return l
      }(r, ["changeLog", "onScroll", "track"]);
    return (0, n.jsx)(c.Modal, (e = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          y(e, t, r[t])
        })
      }
      return e
    }({}, s), t = t = {
      title: b.intl.string(b.t.LRmNAl),
      subtitle: b.intl.format(b.t.Fb8xx2, {
        date: null != l.date && "" !== l.date ? i()(l.date).toDate() : new Date
      }),
      actions: [],
      actionBarInput: this.renderFooter(),
      onClose: () => Promise.resolve(this.props.onClose()),
      scrollerRef: this.scrollerRef,
      onScroll: this.handleScroll,
      children: (0, n.jsxs)("div", {
        tabIndex: 0,
        role: "region",
        "aria-label": b.intl.string(b.t.HzBchE),
        children: [this.renderVideo(), j(l.body, false, {
          changeLog: this,
          interpolations: x,
          onLinkClick: this.trackLinkClick
        })]
      })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r.push.apply(r, n)
      }
      return r
    })(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
    }), e))
  }
  constructor(...e) {
    super(...e), y(this, "scrollerRef", l.createRef()), y(this, "handleScroll", () => {
      let {
        current: e
      } = this.scrollerRef;
      if (null != e) {
        var t, r;
        null == (t = (r = this.props).onScroll) || t.call(r, e)
      }
    }), y(this, "trackLinkClick", e => {
      this.props.track(O.rMx.CHANGE_LOG_CTA_CLICKED, {
        cta_type: "inline_link",
        target: e
      }, false)
    })
  }
}
let C = k