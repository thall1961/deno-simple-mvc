import HOME from '../views/index.js';
import BLOG from '../views/blog.js';

export default {
    home: () => (new TextEncoder().encode(HOME)),
    blog: () => (new TextEncoder().encode(BLOG))
}