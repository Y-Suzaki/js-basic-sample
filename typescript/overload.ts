{
    function transform(): void;
    function transform(content: string): void;
    function transform(content?: string): void {
        if (!content) {
            console.log(content);
        } else {
            console.log('Empty');
        }
    }

    transform();
    transform('Hello');
}