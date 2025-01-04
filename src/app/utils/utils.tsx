export default function getCurrentYear(): string {
    const date = new Date();
    const year = date.getFullYear().toString();
    return year;
}