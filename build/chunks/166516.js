/** Chunk was on 8856 **/
/** chunk id: 166516, original params: t (module,exports,require) **/
! function() {
  var e = function(t) {
    "use strict";
    t = t || {};
    var e, o, r, n, i, a, s, l, h, c, u, f, d, y, g, p, w = {
      bgColor: "#d00",
      textColor: "#fff",
      fontFamily: "sans-serif",
      fontStyle: "bold",
      type: "circle",
      position: "down",
      animation: "slide",
      elementId: false,
      dataUrl: false,
      win: window
    };
    (d = {}).ff = "undefined" != typeof InstallTrigger, d.chrome = !!window.chrome, d.opera = !!window.opera || navigator.userAgent.indexOf("Opera") >= 0, d.ie = false, d.safari = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0, d.supported = d.chrome || d.ff || d.opera;
    var m = [];
    u = function() {}, l = f = false;
    var x = {};
    x.ready = function() {
      l = true, x.reset(), u()
    }, x.reset = function() {
      l && (m = [], h = false, c = false, a.clearRect(0, 0, n, r), a.drawImage(s, 0, 0, n, r), C.setIcon(i), window.clearTimeout(y), window.clearTimeout(g))
    }, x.start = function() {
      if (l && !c) {
        var t = function() {
          h = m[0], c = false, m.length > 0 && (m.shift(), x.start())
        };
        if (m.length > 0) {
          c = true;
          var o = function() {
            ["type", "animation", "bgColor", "textColor", "fontFamily", "fontStyle"].forEach(function(t) {
              t in m[0].options && (e[t] = m[0].options[t])
            }), M.run(m[0].options, function() {
              t()
            }, false)
          };
          h ? M.run(h.options, function() {
            o()
          }, true) : o()
        }
      }
    };
    var b = {},
      v = function(t) {
        return t.n = "number" == typeof t.n ? Math.abs(0 | t.n) : t.n, t.x = n * t.x, t.y = r * t.y, t.w = n * t.w, t.h = r * t.h, t.len = ("" + t.n).length, t
      };

    function A(t) {
      if (t.paused || t.ended || f) returnfalse;
      try {
        a.clearRect(0, 0, n, r), a.drawImage(t, 0, 0, n, r)
      } catch (t) {}
      g = setTimeout(function() {
        A(t)
      }, M.duration), C.setIcon(i)
    }
    b.circle = function(t) {
      t = v(t);
      var o = false;
      2 === t.len ? (t.x = t.x - .4 * t.w, t.w = 1.4 * t.w, o = true) : t.len >= 3 && (t.x = t.x - .65 * t.w, t.w = 1.65 * t.w, o = true), a.clearRect(0, 0, n, r), a.drawImage(s, 0, 0, n, r), a.beginPath(), a.font = e.fontStyle + " " + Math.floor(t.h * (t.n > 99 ? .85 : 1)) + "px " + e.fontFamily, a.textAlign = "center", o ? (a.moveTo(t.x + t.w / 2, t.y), a.lineTo(t.x + t.w - t.h / 2, t.y), a.quadraticCurveTo(t.x + t.w, t.y, t.x + t.w, t.y + t.h / 2), a.lineTo(t.x + t.w, t.y + t.h - t.h / 2), a.quadraticCurveTo(t.x + t.w, t.y + t.h, t.x + t.w - t.h / 2, t.y + t.h), a.lineTo(t.x + t.h / 2, t.y + t.h), a.quadraticCurveTo(t.x, t.y + t.h, t.x, t.y + t.h - t.h / 2), a.lineTo(t.x, t.y + t.h / 2), a.quadraticCurveTo(t.x, t.y, t.x + t.h / 2, t.y)) : a.arc(t.x + t.w / 2, t.y + t.h / 2, t.h / 2, 0, 2 * Math.PI), a.fillStyle = "rgba(" + e.bgColor.r + "," + e.bgColor.g + "," + e.bgColor.b + "," + t.o + ")", a.fill(), a.closePath(), a.beginPath(), a.stroke(), a.fillStyle = "rgba(" + e.textColor.r + "," + e.textColor.g + "," + e.textColor.b + "," + t.o + ")", "number" == typeof t.n && t.n > 999 ? a.fillText((t.n > 9999 ? 9 : Math.floor(t.n / 1e3)) + "k+", Math.floor(t.x + t.w / 2), Math.floor(t.y + t.h - .2 * t.h)) : a.fillText(t.n, Math.floor(t.x + t.w / 2), Math.floor(t.y + t.h - .15 * t.h)), a.closePath()
    }, b.rectangle = function(t) {
      t = v(t);
      2 === t.len ? (t.x = t.x - .4 * t.w, t.w = 1.4 * t.w) : t.len >= 3 && (t.x = t.x - .65 * t.w, t.w = 1.65 * t.w), a.clearRect(0, 0, n, r), a.drawImage(s, 0, 0, n, r), a.beginPath(), a.font = e.fontStyle + " " + Math.floor(t.h * (t.n > 99 ? .9 : 1)) + "px " + e.fontFamily, a.textAlign = "center", a.fillStyle = "rgba(" + e.bgColor.r + "," + e.bgColor.g + "," + e.bgColor.b + "," + t.o + ")", a.fillRect(t.x, t.y, t.w, t.h), a.fillStyle = "rgba(" + e.textColor.r + "," + e.textColor.g + "," + e.textColor.b + "," + t.o + ")", "number" == typeof t.n && t.n > 999 ? a.fillText((t.n > 9999 ? 9 : Math.floor(t.n / 1e3)) + "k+", Math.floor(t.x + t.w / 2), Math.floor(t.y + t.h - .2 * t.h)) : a.fillText(t.n, Math.floor(t.x + t.w / 2), Math.floor(t.y + t.h - .15 * t.h)), a.closePath()
    };
    var C = {};

    function E(t) {
      t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, o, r) {
        return e + e + o + o + r + r
      });
      var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
      return !!e && {
        r: parseInt(e[1], 16),
        g: parseInt(e[2], 16),
        b: parseInt(e[3], 16)
      }
    }

    function I(t, e) {
      var o, r = {};
      for (o in t) r[o] = t[o];
      for (o in e) r[o] = e[o];
      return r
    }
    C.getIcon = function() {
      var t = false;
      return e.element ? t = e.element : e.elementId ? (t = p.getElementById(e.elementId)).setAttribute("href", t.getAttribute("src")) : false === (t = function() {
        for (var t = p.getElementsByTagName("head")[0].getElementsByTagName("link"), e = t.length, o = e - 1; o >= 0; o--)
          if (/(^|\s)icon(\s|$)/i.test(t[o].getAttribute("rel"))) return t[o];
        returnfalse
      }()) && ((t = p.createElement("link")).setAttribute("rel", "icon"), p.getElementsByTagName("head")[0].appendChild(t)), t.setAttribute("type", "image/png"), t
    }, C.setIcon = function(t) {
      var r = t.toDataURL("image/png");
      if (e.dataUrl && e.dataUrl(r), e.element) e.element.setAttribute("href", r), e.element.setAttribute("src", r);
      else if (e.elementId) {
        var n = p.getElementById(e.elementId);
        n.setAttribute("href", r), n.setAttribute("src", r)
      } else if (d.ff || d.opera) {
        var i = o;
        o = p.createElement("link"), d.opera && o.setAttribute("rel", "icon"), o.setAttribute("rel", "icon"), o.setAttribute("type", "image/png"), p.getElementsByTagName("head")[0].appendChild(o), o.setAttribute("href", r), i.parentNode && i.parentNode.removeChild(i)
      } else o.setAttribute("href", r)
    };
    var M = {};
    M.duration = 40, M.types = {}, M.types.fade = [{
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: 0
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: .1
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: .2
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: .3
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: .4
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: .5
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: .6
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: .7
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: .8
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: .9
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: 1
    }], M.types.none = [{
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: 1
    }], M.types.pop = [{
      x: 1,
      y: 1,
      w: 0,
      h: 0,
      o: 1
    }, {
      x: .9,
      y: .9,
      w: .1,
      h: .1,
      o: 1
    }, {
      x: .8,
      y: .8,
      w: .2,
      h: .2,
      o: 1
    }, {
      x: .7,
      y: .7,
      w: .3,
      h: .3,
      o: 1
    }, {
      x: .6,
      y: .6,
      w: .4,
      h: .4,
      o: 1
    }, {
      x: .5,
      y: .5,
      w: .5,
      h: .5,
      o: 1
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: 1
    }], M.types.popFade = [{
      x: .75,
      y: .75,
      w: 0,
      h: 0,
      o: 0
    }, {
      x: .65,
      y: .65,
      w: .1,
      h: .1,
      o: .2
    }, {
      x: .6,
      y: .6,
      w: .2,
      h: .2,
      o: .4
    }, {
      x: .55,
      y: .55,
      w: .3,
      h: .3,
      o: .6
    }, {
      x: .5,
      y: .5,
      w: .4,
      h: .4,
      o: .8
    }, {
      x: .45,
      y: .45,
      w: .5,
      h: .5,
      o: .9
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: 1
    }], M.types.slide = [{
      x: .4,
      y: 1,
      w: .6,
      h: .6,
      o: 1
    }, {
      x: .4,
      y: .9,
      w: .6,
      h: .6,
      o: 1
    }, {
      x: .4,
      y: .9,
      w: .6,
      h: .6,
      o: 1
    }, {
      x: .4,
      y: .8,
      w: .6,
      h: .6,
      o: 1
    }, {
      x: .4,
      y: .7,
      w: .6,
      h: .6,
      o: 1
    }, {
      x: .4,
      y: .6,
      w: .6,
      h: .6,
      o: 1
    }, {
      x: .4,
      y: .5,
      w: .6,
      h: .6,
      o: 1
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: 1
    }], M.run = function(t, o, r, n) {
      var a = M.types[p.hidden || p.msHidden || p.webkitHidden || p.mozHidden ? "none" : e.animation];
      if (n = true === r ? true !== n ? n : a.length - 1 : true !== n ? n : 0, o = o || function() {}, !(n < a.length) || !(n >= 0)) return void o();
      b[e.type](I(t, a[n])), y = setTimeout(function() {
        r ? n -= 1 : n += 1, M.run(t, o, r, n)
      }, M.duration), C.setIcon(i)
    }, (e = I(w, t)).bgColor = E(e.bgColor), e.textColor = E(e.textColor), e.position = e.position.toLowerCase(), e.animation = M.types["" + e.animation] ? e.animation : w.animation, p = e.win.document;
    var T = e.position.indexOf("up") > false,
      U = e.position.indexOf("left") > false;
    if (T || U)
      for (var R = 0; R < M.types["" + e.animation].length; R++) {
        var B = M.types["" + e.animation][R];
        T && (B.y < .6 ? B.y = B.y - .4 : B.y = B.y - 2 * B.y + (1 - B.w)), U && (B.x < .6 ? B.x = B.x - .4 : B.x = B.x - 2 * B.x + (1 - B.h)), M.types["" + e.animation][R] = B
      }
    return e.type = b["" + e.type] ? e.type : w.type, o = C.getIcon(), i = document.createElement("canvas"), s = document.createElement("img"), o.hasAttribute("href") ? (s.setAttribute("crossOrigin", "anonymous"), s.onload = function() {
      r = s.height > 0 ? s.height : 32, n = s.width > 0 ? s.width : 32, i.height = r, i.width = n, a = i.getContext("2d"), x.ready()
    }, s.setAttribute("src", o.getAttribute("href"))) : (s.onload = function() {
      r = 32, n = 32, s.height = r, s.width = n, i.height = r, i.width = n, a = i.getContext("2d"), x.ready()
    }, s.setAttribute("src", "")), {
      badge: function(t, e) {
        e = ("string" == typeof e ? {
          animation: e
        } : e) || {}, u = function() {
          try {
            if ("number" == typeof t ? t > 0 : "" !== t) {
              var o = {
                type: "badge",
                options: {
                  n: t
                }
              };
              if ("animation" in e && M.types["" + e.animation] && (o.options.animation = "" + e.animation), "type" in e && b["" + e.type] && (o.options.type = "" + e.type), ["bgColor", "textColor"].forEach(function(t) {
                  t in e && (o.options[t] = E(e[t]))
                }), ["fontStyle", "fontFamily"].forEach(function(t) {
                  t in e && (o.options[t] = e[t])
                }), m.push(o), m.length > 100) throw Error("Too many badges requests in queue.");
              x.start()
            } else x.reset()
          } catch (t) {
            throw Error("Error setting badge. Message: " + t.message)
          }
        }, l && u()
      },
      video: function(t) {
        u = function() {
          try {
            if ("stop" === t) {
              f = true, x.reset(), f = false;
              return
            }
            t.addEventListener("play", function() {
              A(this)
            }, false)
          } catch (t) {
            throw Error("Error setting video. Message: " + t.message)
          }
        }, l && u()
      },
      image: function(t) {
        u = function() {
          try {
            var e = t.width,
              o = t.height,
              s = document.createElement("img"),
              l = e / n < o / r ? e / n : o / r;
            s.setAttribute("crossOrigin", "anonymous"), s.onload = function() {
              a.clearRect(0, 0, n, r), a.drawImage(s, 0, 0, n, r), C.setIcon(i)
            }, s.setAttribute("src", t.getAttribute("src")), s.height = o / l, s.width = e / l
          } catch (t) {
            throw Error("Error setting image. Message: " + t.message)
          }
        }, l && u()
      },
      webcam: function(t) {
        if (window.URL && window.URL.createObjectURL || (window.URL = window.URL || {}, window.URL.createObjectURL = function(t) {
            return t
          }), d.supported) {
          var e = false;
          navigator.getUserMedia = navigator.getUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia, u = function() {
            try {
              if ("stop" === t) {
                f = true, x.reset(), f = false;
                return
              }(e = document.createElement("video")).width = n, e.height = r, navigator.getUserMedia({
                video: true,
                audio: false
              }, function(t) {
                e.src = URL.createObjectURL(t), e.play(), A(e)
              }, function() {})
            } catch (t) {
              throw Error("Error setting webcam. Message: " + t.message)
            }
          }, l && u()
        }
      },
      reset: x.reset,
      browser: {
        supported: d.supported
      }
    }
  };
  "undefined" != typeof define && define.amd ? define([], function() {
    return e
  }) : module.exports ? module.exports = e : this.Favico = e
}()