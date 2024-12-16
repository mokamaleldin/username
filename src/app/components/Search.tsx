"use client";
import { useState } from "react";

const Search = () => {
    const [username, setUsername] = useState("");
    const [results, setResults] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!username.trim()) return;

        setLoading(true);
        setResults(null);

        const platforms = [
            { name: "Instagram", url: `https://www.instagram.com/${username}` },
            { name: "TikTok", url: `https://www.tiktok.com/@${username}` },
            { name: "YouTube", url: `https://www.youtube.com/@${username}` },
            { name: "Twitter", url: `https://twitter.com/${username}` },
            { name: "LinkedIn", url: `https://www.linkedin.com/in/${username}` },
            { name: "Pinterest", url: `https://www.pinterest.com/${username}` },
        ];

        const checkAvailability = async (platform: string, url: string) => {
            try {
                const response = await fetch(url, { method: "HEAD", mode: "no-cors" });
                if (response.ok) {
                    return { platform, available: false };
                } else {
                    return { platform, available: true };
                }
            } catch (error) {
                return { platform, available: true }; // Assume available if there's an error (cross-origin or not found)
            }
        };

        const checks = platforms.map((platform) => checkAvailability(platform.name, platform.url));
        const results = await Promise.all(checks);

        setResults(results);
        setLoading(false);
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <h2 className="text-center text-2xl font-bold mb-6">Username Availability Checker</h2>
            <form onSubmit={handleSearch} className="flex justify-center">
                <input
                    type="text"
                    className="p-3 border rounded-lg w-72"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-custom-slate text-white px-6 py-3 rounded-lg ml-3"
                    disabled={loading}
                >
                    {loading ? "Checking..." : "Search"}
                </button>
            </form>

            {results && (
                <div className="mt-8">
                    {results.map((result: any) => (
                        <div
                            key={result.platform}
                            className="flex justify-between items-center border-b py-3"
                        >
                            <span className="font-semibold">{result.platform}</span>
                            <span
                                className={`font-medium ${result.available ? "text-green-500" : "text-red-500"
                                    }`}
                            >
                                {result.available ? "Available" : "Taken"}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
