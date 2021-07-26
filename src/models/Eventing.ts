type Callback = () => void;

export class Eventing {
    events: { [key: string]: Callback[]} = {};

    on(eventName: string, callback: Callback): void {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger(eventName: string): void {
        const handlers = this.events[eventName];

        if (!handlers || handlers.length === 0) {
            return;
        }
        handlers.forEach(callback => {
            callback();
        });
    }

    fetch(): void {
        axios.get(`http://localhost:3000/users/${this.get('id')}`)
            .then((response: AxiosResponse): void => {
                this.set(response.data);
            });
    }
    save(): void {
        const id = this.get('id');
        if (this.get('id')) {
            axios.put(`http://localhost:3000/users/${id}`, this.data)
        } else {
            axios.post('http://localhost:3000/users', this.data )
        }
    }
}