# client-component
For server side rendered React applications. A class decorator to restrict rendering to client side only.

# usage

```javascript
import { clientOnly } from 'client-only';

@clientOnly
class ComponentThatAccessesWindowThatIsNotSafeForServerRendering extends Component {
    render() {
        const currentLocation = window.location;
        return (
            <div>{currentLocation}</div>
        )
    };
}
```