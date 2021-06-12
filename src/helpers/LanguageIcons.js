import {default as c} from '../static/icons/c.svg';
import {default as cpp} from '../static/icons/cpp.svg';
import {default as csharp} from '../static/icons/csharp.svg';
import {default as css} from '../static/icons/css.svg';
import {default as django} from '../static/icons/django.svg';
import {default as docker} from '../static/icons/docker.svg';
import {default as git} from '../static/icons/git.svg';
import {default as gitlab} from '../static/icons/gitlab.svg';
import {default as go} from '../static/icons/go.svg';
import {default as html} from '../static/icons/html.svg';
import {default as image} from '../static/icons/image.svg';
import {default as java} from '../static/icons/java.svg';
import {default as javascript} from '../static/icons/javascript.svg';
import {default as markdown} from '../static/icons/markdown.svg';
import {default as nginx} from '../static/icons/nginx.svg';
import {default as nodejs} from '../static/icons/nodejs.svg';
import {default as php} from '../static/icons/php.svg';
import {default as python} from '../static/icons/python.svg';

const map = {
  "c": c,
  "cpp": cpp,
  "c#": csharp,
  "csharp": csharp,
  "css": css,
  "django": django,
  "docker": docker,
  "git": git,
  "gitlab": gitlab,
  "go": go,
  "html": html,
  "image": image,
  "java": java,
  "javascript": javascript,
  "markdown": markdown,
  "nginx": nginx,
  "nodejs": nodejs,
  "php": php,
  "python": python,
}

export function getIconForLanguage(language) {
  return map[language.toLowerCase()];
}
