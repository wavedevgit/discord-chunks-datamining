/** Chunk was on web.js **/
/** chunk id: 754396, original params: e,t,n (module,exports,re quire) **/
"use strict";
require("./961742.js"), require("./27273.js"), require("./262068.js");
let r = null;
async function i(e) {
  let t = r[e];
  if (null != t) return t;
  let n = await fetch(e);
  return t = {
    url: e,
    cssText: await n.text()
  }, r[e] = t, t
}
async function o(e, t) {
  let n = e.cssText,
    r = /url\(["']?([^"')]+)["']?\)/g;
  return Promise.all((n.match(/url\([^)]+\)/g) || []).map(async i => {
    let o = i.replace(r, "$1");
    return o.startsWith("https://") || (o = new URL(o, e.url).href), fetchAsDataURL(o, t.fetchRequestInit, ({
      result: e
    }) => (n = n.replace(i, `url(${e})`), [i, e]))
  })).then(() => n)
}

function a(e) {
  if (null == e) return [];
  let t = [],
    n = /(\/\*[\s\S]*?\*\/)/gi,
    r = e.replace(n, ""),
    i = RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (;;) {
    let e = i.exec(r);
    if (null === e) break;
    t.push(e[0])
  }
  r = r.replace(i, "");
  let o = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
    a = RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", "gi");
  for (;;) {
    let e = o.exec(r);
    if (null === e) {
      if (null === (e = a.exec(r))) break;
      o.lastIndex = a.lastIndex
    } else a.lastIndex = o.lastIndex;
    t.push(e[0])
  }
  return t
}
async function s(e, t) {
  let n = [],
    r = [];
  return e.forEach(n => {
    if ("cssRules" in n) try {
      toArray(n.cssRules || []).forEach((e, s) => {
        if (e.type === CSSRule.IMPORT_RULE) {
          let l = s + 1,
            c = e.href,
            u = i(c).then(e => o(e, t)).then(e => a(e).forEach(e => {
              try {
                n.insertRule(e, e.startsWith("@import") ? l += 1 : n.cssRules.length)
              } catch (t) {
                console.error("Error inserting rule from remote css", {
                  rule: e,
                  error: t
                })
              }
            })).catch(e => {
              console.error("Error loading remote css", e.toString())
            });
          r.push(u)
        }
      })
    } catch (l) {
      let s = e.find(e => null == e.href) || document.styleSheets[0];
      null != n.href && r.push(i(n.href).then(e => o(e, t)).then(e => a(e).forEach(e => {
        s.insertRule(e, n.cssRules.length)
      })).catch(e => {
        console.error("Error loading remote stylesheet", e)
      })), console.error("Error inlining remote css file", l)
    }
  }), Promise.all(r).then(() => (e.forEach(e => {
    if ("cssRules" in e) try {
      toArray(e.cssRules || []).forEach(e => {
        n.push(e)
      })
    } catch (t) {
      console.error(`Error while reading CSS rules from ${e.href}`, t)
    }
  }), n))
}

function l(e) {
  return e.filter(e => e.type === CSSRule.FONT_FACE_RULE).filter(e => shouldEmbed(e.style.getPropertyValue("src")))
}
async function c(e, t) {
  if (null == e.ownerDocument) throw Error("Provided element is not within a Document");
  let n = toArray(e.ownerDocument.styleSheets);
  return l(await s(n, t))
}